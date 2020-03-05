const {model, Schema}=require("mongoose");

const productSchema = new Schema(
    {
        name:{
          type:String,
          unique:true,
        },
        supplies:[{type:String}],
        descripcion:String,
        price: Number,
        blueprint: String
    },
    {
        timestamps:true,
        versionKey: false
    }
);

module.exports = model("Product",productSchema);