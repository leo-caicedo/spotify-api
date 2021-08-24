const { Schema, model } = require("mongoose");

const albumSchema = new Schema(
  {
    album: {
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
    songs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Song",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Album", albumSchema);
