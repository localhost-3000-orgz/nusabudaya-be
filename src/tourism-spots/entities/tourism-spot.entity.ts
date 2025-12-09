import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Province } from "../../provinces/entities/province.entity";

@Entity('tourism_spots')
export class TourismSpot {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Province, (province) => province.tourismSpots, { nullable: false })
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  location_address: string;

  @Column({ nullable: true })
  maps_coordinate: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  image_url: string;
}

