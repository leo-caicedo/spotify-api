const { Schema, model } = require("mongoose");

const songSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: [
      {
        type: Schema.Types.ObjectId,
        ref: "Artist",
        required: true,
      },
    ],
    duration: {
      type: Number,
    },
    album: {
      type: Schema.Types.ObjectId,
      ref: "Album",
    },
    gender: [
      {
        type: Schema.Types.ObjectId,
        ref: "Gender",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Song", songSchema);
