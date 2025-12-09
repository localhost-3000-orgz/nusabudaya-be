import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Province } from "../../provinces/entities/province.entity";

@Entity('regional_songs')
export class RegionalSong {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Province, (province) => province.regionalSongs, { nullable: false })
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  lyrics: string;

  @Column({ nullable: true })
  audio_url: string;
}

