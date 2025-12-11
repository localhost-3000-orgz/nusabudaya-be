import { Achievement } from "src/achievements/entities/achievement.entity";
import { GameResult } from "src/game-results/entities/game-result.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  picture: string;

  @Column({ default: 'google' })
  provider: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => GameResult, (gameResult) => gameResult.user)
  game_results: GameResult[];
  
  @OneToMany(() => Achievement, (achievement) => achievement.user)
  achievements: Achievement[];
}
