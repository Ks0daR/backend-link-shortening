import mongoose, { Schema, model } from "mongoose";

const { ObjectId } = mongoose.Types;

const schema = new Schema({
  from: { type: String, required: true },
  shortLink: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
  clicks: { type: Number, default: 0 },
  owner: { type: ObjectId, ref: "users" },
});

schema.statics.addNewLink = addNewLink;
schema.statics.getAllLinks = getAllLinks;
schema.statics.getLinkById = getLinkById;
schema.statics.getLinkByCode = getLinkByCode;

function addNewLink(from, shortLink, code, owner) {
  return this.create({ from, shortLink, code, owner });
}

function getAllLinks(id) {
  return this.find({ owner: id });
}

function getLinkById(_id) {
  return this.findOne({ _id });
}

function getLinkByCode(code) {
  return this.findOne({ code });
}

export const linksModel = model("Link", schema);
