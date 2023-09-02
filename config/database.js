const mongoose = require("mongoose");

const dbConnect = async () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "CRUD-Login-Logout",
    })
    .then((conn) => {
      console.log(`Connection - MongoDb: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { dbConnect };
