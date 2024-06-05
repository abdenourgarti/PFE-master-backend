const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Organisation\'s name is required"],
    unique: [true, "Organisation\'s name is already in use"],
    trim: true,
  },

  Boss: {
    type: mongoose.Schema.Types.ObjectId,
    //required: [true, "Boss is required"],
    ref: "User",
  },
});

module.exports = mongoose.model("Organization", OrganizationSchema);

