module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  middleware: {
    settings: {
      cors: {
        enabled: true,
        origin: ["http://localhost:3000"], // Замените на свой домен, например, 'http://your-domain.com'
      },
    },
  },
});
