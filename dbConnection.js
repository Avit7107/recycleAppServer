const mongoose = require("mongoose");
const url = process.env.MONGO_URI || "mongodb://localhost:27017";;
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const connectDB = async () => {
  try {
    mongoose.connect(`${url}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`mongoDB connected `);
  } catch (error) {
    console.error(`error : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;