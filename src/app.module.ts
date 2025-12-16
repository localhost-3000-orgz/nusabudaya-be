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
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { GameResultsModule } from './game-results/game-results.module';
import { ImageGuessesModule } from './image-guesses/image-guesses.module';
import { AchievementsModule } from './achievements/achievements.module';
import { AiModule } from './ai/ai.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        autoLoadEntities: true, 
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
    AchievementsModule,
    AiModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
