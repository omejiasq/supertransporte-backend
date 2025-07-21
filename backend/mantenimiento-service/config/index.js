require('dotenv').config()
module.exports = {
  PORT: process.env.MANTO_PORT || 3004,
  MONGO_URI: process.env.MONGO_URI
};
