var mongoose = require("mongoose");
var dbURI =
  "mongodb+srv://mekan32:mekan32@mekanbul.a2excj8.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI);
mongoose.connection.on("connected", function () {
  console.log(dbURI + "bağlandı");
});
mongoose.connection.on("error", function () {
  console.log("bağlantı hatası");
});
mongoose.connection.on("disconnected", function () {
  console.log("bağlantı kesildi");
});
process.on("SIGINT", function () {
  mongoose.connection.close();
  console.log("kapatıldı");
  process.exit(0);
});
require("./venue");
