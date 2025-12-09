import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Province } from "../../provinces/entities/province.entity";

@Entity('musical_instruments')
export class MusicalInstrument {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Province, (province) => province.musicalInstruments, { nullable: false })
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @Column()
  name: string;

  @Column({ nullable: true })
  cara_main: string;

  @Column({ nullable: true })
  image_url: string;
}

