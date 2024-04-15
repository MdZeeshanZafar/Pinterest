require('dotenv').config()
const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect(process.env.MONGO_URI);



const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: []
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    }
  ]
})

userSchema.plugin(plm);
module.exports = mongoose.model("user", userSchema)