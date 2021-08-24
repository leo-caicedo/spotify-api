const { Schema, model } = require("mongoose");

const genderSchema = new Schema(
  {
    gender: {
      type: String,
      required: true,
    },
    songs: {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Gender", genderSchema);
