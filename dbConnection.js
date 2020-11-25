const mongoose = require("mongoose");
const connectDB = async () => {
    try {
      const connection = mongoose.connect(
  
       "mongodb+srv://avital:avital@cluster0.zx6rq.mongodb.net/datastore?retryWrites=true&w=majority",
       {
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useCreateIndex: true,
        }
      
    );
    console.log(`mongoDB connected `);
  } catch (error) {
    console.error(`error : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;