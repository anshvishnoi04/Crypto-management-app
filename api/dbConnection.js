const mongoose = require("mongoose");

const uri ="mongodb+srv://anshvishnoi2004:<Joker101@>@cluster0.hqsdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  
mongoose;

function dbConnection() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
