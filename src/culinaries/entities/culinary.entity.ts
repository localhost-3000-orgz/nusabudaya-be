import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Province } from "../../provinces/entities/province.entity";

export enum CulinaryType {
  MAKANAN = 'Makanan',
  MINUMAN = 'Minuman',
  JAJANAN = 'Jajanan',
}

@Entity('culinaries')
export class Culinary {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Province, (province) => province.culinaries)
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: CulinaryType,
    nullable: true,
  })
  type: CulinaryType;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  image_url: string;
}

