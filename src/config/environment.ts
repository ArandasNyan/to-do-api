import dotenv from 'dotenv';

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile });

export const ENV = {
  port: process.env.PORT || process.env.SUBPORT,
  databaseUrl: process.env.DATABASE_URL || '',
  jwtSecret: process.env.JWT_SECRET || '',
  saltRounds: process.env.BCRYPT_SALT_ROUNDS
};
