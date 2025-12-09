import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Province } from "../../provinces/entities/province.entity";

@Entity('traditional_dances')
export class TraditionalDance {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Province, (province) => province.traditionalDances, { nullable: false })
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  video_url: string;
}

