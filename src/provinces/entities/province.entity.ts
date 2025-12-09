import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
