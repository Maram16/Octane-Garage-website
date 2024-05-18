import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Typically, the email should be unique.
  },
  phone: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
    required: true,
    },
    
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("UserProfile", UserSchema, "UserProfile");

export default UserModel;
