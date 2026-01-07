import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, Column } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Province } from 'src/provinces/entities/province.entity';

@Entity('achievements')
export class Achievement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  rank: number;

  @ManyToOne(() => User, (user) => user.achievements)
  user: User;

  @ManyToOne(() => Province, (province) => province.achievements)
  province: Province;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
