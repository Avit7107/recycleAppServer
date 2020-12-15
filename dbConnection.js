const mongoose = require("mongoose");
const url = "mongodb+srv://avital:avital@cluster0.zx6rq.mongodb.net/datastore?retryWrites=true&w=majority";

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