module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'ep-white-mountain-a1wo5o9v-pooler.ap-southeast-1.aws.neon.tech'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'neondb'),
        user: env('DATABASE_USERNAME', 'neondb_owner'),
        password: env('DATABASE_PASSWORD', 'npg_n4ZQpwiJ0Tjg'),
        ssl: { rejectUnauthorized: false }, // Required for Neon.tech
      },
      debug: false,
    },
  });
  