import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvincesModule } from './provinces/provinces.module';
import { TraditionalHousesModule } from './traditional-houses/traditional-houses.module';
import { TraditionalDancesModule } from './traditional-dances/traditional-dances.module';
import { TraditionsModule } from './traditions/traditions.module';
import { TraditionalWeaponsModule } from './traditional-weapons/traditional-weapons.module';
import { MusicalInstrumentsModule } from './musical-instruments/musical-instruments.module';
import { RegionalSongsModule } from './regional-songs/regional-songs.module';
import { CulinariesModule } from './culinaries/culinaries.module';
import { TourismSpotsModule } from './tourism-spots/tourism-spots.module';
import { Province } from './provinces/entities/province.entity';
import { TraditionalHouse } from './traditional-houses/entities/traditional-house.entity';
import { TraditionalDance } from './traditional-dances/entities/traditional-dance.entity';
import { Tradition } from './traditions/entities/tradition.entity';
import { TraditionalWeapon } from './traditional-weapons/entities/traditional-weapon.entity';
import { MusicalInstrument } from './musical-instruments/entities/musical-instrument.entity';
import { RegionalSong } from './regional-songs/entities/regional-song.entity';
import { Culinary } from './culinaries/entities/culinary.entity';
import { TourismSpot } from './tourism-spots/entities/tourism-spot.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { QuizzesModule } from './quizzes/quizzes.module';
import { Quiz } from './quizzes/entities/quiz.entity';
import { GameResultsModule } from './game-results/game-results.module';
import { GameResult } from './game-results/entities/game-result.entity';
import { ImageGuessesModule } from './image-guesses/image-guesses.module';
import { ImageGuess } from './image-guesses/entities/image-guess.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: Number(configService.get<string>('DB_PORT', '5432')),
        username: configService.get<string>('DB_USERNAME', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', 'postgres'),
        database: configService.get<string>('DB_DATABASE', 'nusa_budaya'),
        entities: [
          Province,
          TraditionalHouse,
          TraditionalDance,
          Tradition,
          TraditionalWeapon,
          MusicalInstrument,
          RegionalSong,
          Culinary,
          TourismSpot,
          User,
          Quiz,
          GameResult,
          ImageGuess,
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    ProvincesModule,
    TraditionalHousesModule,
    TraditionalDancesModule,
    TraditionsModule,
    TraditionalWeaponsModule,
    MusicalInstrumentsModule,
    RegionalSongsModule,
    CulinariesModule,
    TourismSpotsModule,
    AuthModule,
    UsersModule,
    QuizzesModule,
    GameResultsModule,
    ImageGuessesModule,
  ],
})
export class AppModule {}
