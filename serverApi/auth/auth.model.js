import { Schema, model } from "mongoose";

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

function getUserByIdAndUpdate(_id, token) {
  return this.updateOne({ _id }, { token });
}

function getUserByEmail(email) {
  return this.findOne({ email });
}

export const authModel = model("User", userSchema);
