const { app } = require("./app");
const { dbConnect } = require("./config/database");
// dbconnect"
dbConnect();
app.listen(process.env.PORT, () => {
  console.log(`server running at ${process.env.PORT}`);
});
