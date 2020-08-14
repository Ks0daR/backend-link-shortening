import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.statics.addNewUser = addNewUser;
userSchema.statics.getUserByEmail = getUserByEmail;

function addNewUser(user) {
  this.create(user);
}

function getUserByEmail(email) {
  return this.findOne({ email });
}

export const authModel = mongoose.model("User", userSchema);
