import { Culinary } from "src/culinaries/entities/culinary.entity";
import { MusicalInstrument } from "src/musical-instruments/entities/musical-instrument.entity";
import { RegionalSong } from "src/regional-songs/entities/regional-song.entity";
import { TourismSpot } from "src/tourism-spots/entities/tourism-spot.entity";
import { Tradition } from "src/traditions/entities/tradition.entity";
import { TraditionalDance } from "src/traditional-dances/entities/traditional-dance.entity";
import { TraditionalHouse } from "src/traditional-houses/entities/traditional-house.entity";
import { TraditionalWeapon } from "src/traditional-weapons/entities/traditional-weapon.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('provinces')
export class Province {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  capital_city: string;

  @Column('decimal')
  area_km2: number;

  @Column({ type: 'date', nullable: true })
  anniversary_date: Date;

  @Column({ nullable: true })
  icon_url: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => TraditionalHouse, (traditionalHouse) => traditionalHouse.province)
  traditionalHouses: TraditionalHouse[]; 

  @OneToMany(() => Culinary, (culinary) => culinary.province)
  culinaries: Culinary[]; 

  @OneToMany(() => MusicalInstrument, (musicalInstrument) => musicalInstrument.province)
  musicalInstruments: MusicalInstrument[];

  @OneToMany(() => RegionalSong, (regionalSong) => regionalSong.province)
  regionalSongs: RegionalSong[];

  @OneToMany(() => TourismSpot, (tourismSpot) => tourismSpot.province)
  tourismSpots: TourismSpot[];

  @OneToMany(() => TraditionalDance, (traditionalDance) => traditionalDance.province)
  traditionalDances: TraditionalDance[];

  @OneToMany(() => TraditionalWeapon, (traditionalWeapon) => traditionalWeapon.province)
  traditionalWeapons: TraditionalWeapon[];

  @OneToMany(() => Tradition, (tradition) => tradition.province)
  traditions: Tradition[];
}
