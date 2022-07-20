const mongoose = require("mongoose");
dbConnection().catch((err) => console.log(err));

async function dbConnection() {
  try {
    await mongoose.connect(process.env.DB_CNN);

    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar la BD ver logs");
  }
}

module.exports = {
  dbConnection,
};
