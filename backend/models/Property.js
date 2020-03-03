const { Schema, model } = require('mongoose');
const propertySchema = new Schema (
{
    imageURL: String,
    direction: String,
    description: String,
    price: Number,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
},
{
    timestamps: true,
    versionKey: false
  }
);
module.exports = model('Property', propertySchema);