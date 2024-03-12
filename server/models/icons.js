const mongoose = require("mongoose");

const IconSchema = new mongoose.Schema({
  _id: Number,
  app: String,
  sub: Number,
});

const IconModel = mongoose.model("apps", IconSchema);
module.exports = IconModel;
