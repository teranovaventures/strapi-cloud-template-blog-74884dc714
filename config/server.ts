// newapp/backend/config/server.ts
export default ({ env }: { env: any }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),  // Default to 1338 if PORT is not set in .env
  app: {
    keys: env.array('APP_KEYS'),
  },
});