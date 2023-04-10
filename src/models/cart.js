import mongoose, { Schema, Model } from "mongoose";

const cartSchema = new Schema(
  {
    idUser: { type: String, require: true },
    products:[ {
        _id: { type: String },
        idProduct: { type: String,
          require: true },
        nameProduct: { type: String,
          require: true },
        description:{ type: String,
          require: true},
        amount:{type: Number,
          require: true},
        total: {type: Number,
          require: true},
        urlImage: {type: String,
        require: true}
     }] ,
  },

  {
    timestamps: true,
    versionKey: false,
  }
);
export default mongoose.model("Cart", cartSchema);
