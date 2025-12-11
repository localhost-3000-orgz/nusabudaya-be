import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Province } from '../../provinces/entities/province.entity';

@Entity('image_guesses')
export class ImageGuess {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Province, (province) => province.image_guesses)
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @Column()
  question: string;

  @Column()
  image_url: string;

  @Column("simple-array")
  choices: string[];

  @Column()
  answer: string;
}
