const mongoose = require("mongoose");

const IconSchema = new mongoose.Schema({
  _id: String,
  app: String,
  sub: Number,
  icon: String,
  isactive: Boolean
});

const IconModel = mongoose.model("apps", IconSchema);
module.exports = IconModel;
