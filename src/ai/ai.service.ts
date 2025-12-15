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
      this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite'})
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
         Anda adalah ahli antropologi dan budaya Indonesia (NusaBudaya AI).
         Tugas: Analisis gambar yang diunggah.
         
         Langkah analisis:
         1. Identifikasi apakah objek dalam gambar adalah bagian dari budaya Indonesia (Batik, Rumah Adat, Alat Musik, Senjata, Makanan, Tarian, Situs Sejarah, dll).
         2. Jika BUKAN objek budaya Indonesia atau gambar tidak jelas, set "isCultural": false.
         3. Jika YA, berikan detail mendalam.

         Output WAJIB berupa JSON RAW (tanpa markdown code block) dengan struktur:
         {
            "isCultural": boolean,
            "name": "Nama Objek",
            "category": "Kategori (contoh: Wastra, Arsitektur, Kuliner)",
            "origin": "Asal Daerah/Provinsi (Perkiraan)",
            "description": "Deskripsi singkat 2-3 kalimat.",
            "history": "Sejarah singkat atau latar belakang.",
            "philosophy": "Makna filosofis dibalik objek ini.",
            "confidence": "Angka 1-100 (tingkat keyakinan AI)"
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
}
