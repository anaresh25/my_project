const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile_image: {
      type: Object,
      // required: true,
      default:"https://res.cloudinary.com/m180281ca/image/upload/v1618759965/default_empty_lcp2zv.jpg"
    },
    followers: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],

    requestedTo: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
    requestedBy: [
      {
        type: ObjectId,
        ref: "User",
      },
      
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
