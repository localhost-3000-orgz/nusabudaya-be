import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Province } from "src/provinces/entities/province.entity";

export enum GameType {
  QUIZ = "QUIZ",
  GUESS = "GUESS",
  MEMORY_CARD = "MEMORY_CARD"
}

@Entity('game_results')
export class GameResult {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.game_results)
  @JoinColumn({ name: 'user_id' })
  user: User;
  
  @ManyToOne(() => Province, (province) => province.game_results)
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @Column({
    type: "enum",
    enum: GameType,
  })
  type: GameType;

  @Column('int')
  time: number; // in seconds

  @Column('int')
  xp: number;

  @Column({
    type: "boolean",
    default: false
  })
  is_complete: boolean;

  @CreateDateColumn()
  created_at: Date;
}
