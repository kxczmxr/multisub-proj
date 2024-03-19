const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const IconSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  app: String,
  sub: Number,
  icon: String,
  isactive: Boolean,
});

const IconModel = mongoose.model("apps", IconSchema);
module.exports = IconModel;
