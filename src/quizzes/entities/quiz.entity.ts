import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Province } from "src/provinces/entities/province.entity";

@Entity('quizzes')
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column("simple-array")
  choices: string[];

  @Column()
  answer: string;

  @Column()
  explanation: string;

  @ManyToOne(() => Province, (province) => province.quizzes)
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @CreateDateColumn()
  created_at: Date;
}
