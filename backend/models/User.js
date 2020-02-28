const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    name: String,
    email: String,
    address: String,
    phone: Number,
    purpose: String,
    imgURL: {
      type: String,
      default:'https://innovarcont.com.br/wp-content/uploads/2015/10/Logo-Default-300x300.png'
    },
  },
  {
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Card'
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
