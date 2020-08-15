import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String },
});

userSchema.statics.addNewUser = addNewUser;
userSchema.statics.getUserByIdAndUpdate = getUserByIdAndUpdate;
userSchema.statics.getUserByEmail = getUserByEmail;

function addNewUser(user) {
  return this.create(user);
}

function getUserByIdAndUpdate(id, token) {
  return this.findByIdAndUpdate(id, { token }, { new: true });
}

function getUserByEmail(email) {
  return this.findOne({ email });
}

export const authModel = mongoose.model("User", userSchema);
