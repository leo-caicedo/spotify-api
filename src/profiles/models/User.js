const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    playlists: [
      {
        type: Schema.Types.ObjectId,
        ref: "Playlist",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// encrypt password
userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(6);
  return await bcrypt.hash(password, salt);
};
userSchema.statics.validatePassword = async (receivedPassword, password) => {
  return await bcrypt.compare(receivedPassword, password);
};

// delete password for response
userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.password;
  },
});

module.exports = model("User", userSchema);
