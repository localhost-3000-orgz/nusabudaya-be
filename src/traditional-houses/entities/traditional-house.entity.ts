import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Province } from "../../provinces/entities/province.entity";

@Entity('traditional_houses')
export class TraditionalHouse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  image_url: string;

  @ManyToOne(() => Province, (province) => province.traditionalHouses)
  @JoinColumn({ name: 'province_id' })
  province: Province;
}
