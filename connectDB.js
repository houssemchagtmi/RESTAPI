const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(process.env.URI_DB)
    .then(() => console.log("DB connected good"))
    .catch((err) => console.log(err));
};
module.exports = connectDB 
 