const { Schema, model } = require("mongoose");

const artistSchema = new Schema({
  artist: {
    type: String,
    required: true,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  albums: [
    {
      type: Schema.Types.ObjectId,
      ref: "Album",
    },
  ],
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
});

module.exports = model("Artist", artistSchema);
