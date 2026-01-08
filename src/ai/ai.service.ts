import { GoogleGenerativeAI } from '@google/generative-ai';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AiService {
   private genAI: GoogleGenerativeAI;
   private model: any;

   constructor(private configService: ConfigService) {
      const apiKey = this.configService.get<string>('GEMINI_API_KEY')
      if (!apiKey) {
         throw new Error('GEMINI_API_KEY tidak ada');
      }

      this.genAI = new GoogleGenerativeAI(apiKey)
      this.model = this.genAI.getGenerativeModel({ 
         model: 'gemini-2.5-flash-lite',
         generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.4,
         }
      })
   }

   async analyzeImage(file: Express.Multer.File) {
      if(!file) {
         throw new BadRequestException('Tidak ada gambar terkirim');
      }

      const imagePart = {
         inlineData: {
            data: file.buffer.toString('base64'),
            mimeType: file.mimetype
         }
      }

      const prompt = `
         Anda adalah **Kurator Senior Museum Nasional Indonesia** & **Ahli Antropologi Budaya**.
         Keahlian Anda mencakup identifikasi mendalam terhadap Wastra (Kain), Arsitektur Vernakular, Senjata Tradisional, Alat Musik, Kuliner, dan Seni Pertunjukan dari 38 Provinsi di Indonesia.
   
         **TUGAS:**
         Lakukan analisis visual mendalam terhadap gambar yang diberikan (Pixel-by-Pixel Analysis) untuk menentukan apakah ini adalah objek budaya Indonesia yang valid.
   
         **LANGKAH BERPIKIR (CHAIN OF THOUGHT):**
         1.  **Observasi Visual:** Identifikasi ciri fisik utama (motif, bahan, siluet, warna, tekstur).
         2.  **Validasi Budaya:** Apakah ciri tersebut cocok dengan database budaya Nusantara?
            - Jika gambar adalah objek umum (selfie, hewan biasa, gedung modern, pemandangan tanpa situs sejarah), tandai sebagai NON-BUDAYA.
         3.  **Kategorisasi Ketat:** Masukkan HANYA ke salah satu dari 8 kategori:
            ["Tarian Tradisional", "Rumah Adat", "Pakaian Adat", "Alat Musik", "Senjata Tradisional", "Makanan Khas", "Kerajinan Tangan", "Upacara Adat"].
         4.  **Ekstraksi Detail:** Jika valid, susun sejarah, filosofi, dan karakteristiknya.
   
         **FORMAT OUTPUT (JSON SCHEMA):**
         Berikan respon HANYA dalam JSON dengan struktur berikut:
   
         {
         "isCultural": boolean, // true jika valid budaya Indonesia, false jika tidak
         "category": string, // Salah satu dari 8 kategori di atas. null jika isCultural false
         "name": string, // Nama spesifik (Title Case). Contoh: "Tari Kecak", bukan "Tari Bali"
         "province": string, // Nama Provinsi asal. Contoh: "Bali"
         "description": string, // Deskripsi informatif & edukatif (2-3 kalimat)
         "confidence": number, // Tingkat keyakinan AI (0-100)
         "culturalMeaning": string, // Makna filosofis/simbolis mendalam
         "mainCharacteristic": string[], // Array berisi 3-5 ciri visual yang terlihat di gambar
         "history": string, // Sejarah singkat penciptaan atau asal usul
         "relatedCultures": string[] // Array berisi 3-5 hal terkait (alat musik pengiring, bahan dasar, dll)
         }
      `;

      try {
         const result = await this.model.generateContent([prompt, imagePart]);
         const response = await result.response;
         let text = response.text();

         text = text.replace(/```json|```/g, '').trim();

         return JSON.parse(text);
      } catch (error) {
         console.error('Gemini Error:', error);
         throw new BadRequestException('Gagal menganalisis gambar, Silahkah coba lagi')
      }
   }

   async generateBatik(file: Express.Multer.File, deskripsi: String) {
      if(!file) {
         throw new BadRequestException('Tidak ada batik terkirim');
      }

      const imagePart = {
         inlineData: {
            data: file.buffer.toString('base64'),
            mimeType: file.mimetype
         }
      }

      const promptDescribe = `
         Deskripsikan objek utama dalam gambar ini dalam Bahasa Inggris secara sangat singkat (maksimal 3-5 kata). 
         Contoh output: "Majestic Eagle" atau "Blooming Rose" atau "Playing Guitar".
         Jangan ada kata pengantar.
      `;

      const result = await this.model.generateContent([promptDescribe, imagePart]);
      const description = result.response.text().trim();

      const batikPrompt = `Indonesian traditional batik pattern of ${description}, intricate wax resist texture, repeating seamless pattern, javanese ornament, detailed, 4k, earthy colors`;
      
      const encodedPrompt = encodeURIComponent(batikPrompt);
      const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=768&height=768&nologo=true&seed=${Math.random()}`;

      // Kita fetch gambarnya agar bisa dikirim sebagai Base64 ke frontend
      // (Atau kirim URL-nya saja kalau frontend mau load langsung)
      const response = await fetch(imageUrl); // Native fetch
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64Image = buffer.toString('base64')

      try {
         const result = await this.model.generateContent([prompt, imagePart]);
         const response = await result.response;
         let text = response.text();

         text = text.replace(/^```(svg|xml)?|```$/g, '').trim();

         if (!text.startsWith('<svg') || !text.endsWith('</svg>')) {
            const startIndex = text.indexOf('<svg');
            const endIndex = text.lastIndexOf('</svg>') + 6;
            if (startIndex !== -1 && endIndex !== -1) {
               text = text.substring(startIndex, endIndex);
            } else {
               throw new Error("Output AI bukan SVG valid");
            }
         }

         return text;
      } catch (error) {
         console.error('Gemini Error:', error);
         throw new BadRequestException('Gagal menganalisis gambar, Silahkah coba lagi')
      }
   }
}
