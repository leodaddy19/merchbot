export default () => {
  console.log(process.env.DATABASE_URI);
  return {
    COOKIE_SECRET: process.env.COOKIE_SECRET,
    DATABASE_URI:
      process.env.DATABASE_URI || 'mongodb://localhost:27017/ecommerce',
    PORT: process.env.PORT || 8080,
  }
};
