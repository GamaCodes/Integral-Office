const { Schema, model } = require('mongoose');

const cardSchema = new Schema (
{
    name: String,
    imageURL: String,
    description: String
},
{
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Card', cardSchema);