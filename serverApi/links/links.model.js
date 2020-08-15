import mongoose, { Schema, model } from "mongoose";

const { ObjectId } = mongoose.Types;

const schema = new Schema({
  name: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
  clicks: { type: Number, default: 0 },
  owner: { type: ObjectId, ref: "users" },
});

schema.statics.addNewLink = addNewLink;
schema.statics.getAllLinks = getAllLinks;

function addNewLink() {}

function getAllLinks(id) {
  return this.find({ owner: id });
}

export const linksModel = model("Link", schema);
