const mongoose = require('mongoose');

// module.exports = ()=>{
//     return mongoose.connect("mongodb+srv://kavya_047:kavya_047@cluster0.vrril.mongodb.net/Purplle_Database")
// }

const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  return mongoose.connect(
    process.env.MONGODB_URI ||
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zkdfr.mongodb.net/bellavitaData?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};