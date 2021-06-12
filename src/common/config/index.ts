export default () => ({
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  DATABASE_URI:
    process.env.DATABASE_URI || 'mongodb://localhost:27017/chatbot-starter',
  PORT: process.env.PORT || 8080,
});
