import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.statics.getUserByEmail = getUserByEmail;

function getUserByEmail(email) {
  return this.findOne({ email });
}

export const authModel = mongoose.model("User", userSchema);
