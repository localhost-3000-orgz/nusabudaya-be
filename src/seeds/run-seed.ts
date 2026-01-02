import { DataSource } from 'typeorm';
import { config } from 'dotenv';

// Import all entity classes
import { Province } from '../provinces/entities/province.entity';
import { TraditionalHouse } from '../traditional-houses/entities/traditional-house.entity';
import { TraditionalDance } from '../traditional-dances/entities/traditional-dance.entity';
import { Tradition } from '../traditions/entities/tradition.entity';
import { TraditionalWeapon } from '../traditional-weapons/entities/traditional-weapon.entity';
import { MusicalInstrument } from '../musical-instruments/entities/musical-instrument.entity';
import { RegionalSong } from '../regional-songs/entities/regional-song.entity';
import { Culinary } from '../culinaries/entities/culinary.entity';
import { TourismSpot } from '../tourism-spots/entities/tourism-spot.entity';
import { User } from '../users/entities/user.entity';
import { Quiz } from '../quizzes/entities/quiz.entity';
import { GameResult } from '../game-results/entities/game-result.entity';
import { ImageGuess } from '../image-guesses/entities/image-guess.entity';
import { Achievement } from '../achievements/entities/achievement.entity';

import { seedProvinces } from './province.seeder';
import { seedTraditions } from './tradition.seeder';
import { seedCulinaries } from './culinary.seeder';
import { seedMusicalInstruments } from './musial-instrument.seeder';
import { seedTraditionalDances } from './traditional-dances.seeder';
import { seedTraditionalHouses } from './traditional-houses.seeder';
import { seedTraditionalWeapons } from './traditional-weapons.seeder';
import { seedTraditionalSpots } from './traditional-spots.seeder';
import { seedRegionalSongs } from './regional-songs.seeder';

config();

const dataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
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
    Achievement,
  ],
  synchronize: true,
});

const runSeed = async () => {
  try {
    await dataSource.initialize();
    console.log('Database connected for seeding...');

    //===== START SEEDER =====
    await seedProvinces(dataSource);
    await seedTraditions(dataSource);
    await seedCulinaries(dataSource);
    await seedMusicalInstruments(dataSource);
    await seedTraditionalDances(dataSource);
    await seedTraditionalHouses(dataSource);
    await seedTraditionalWeapons(dataSource);
    await seedTraditionalSpots(dataSource);
    await seedRegionalSongs(dataSource);
    //===== END SEEDER =====

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await dataSource.destroy();
  }
};

runSeed();