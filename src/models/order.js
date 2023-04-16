import mongoose, { Schema, Model } from "mongoose";

const orderSchema = new Schema(
  {
    idUser: { type: String, require: true },
    status:{ type: String, require: true},
    fullNameUser: { type: String, require: true},
    paid: { type: Boolean, require: true},
    municipio:{ type: String, require: true},
    comunidad: { type: String, require: true},
    calle:{ type: String, require: true},
    numero:{ type: String, require: true},
    email:{ type: String, require: true},
    telefono:{ type: String, require: true},
    dateDeliver:{ type: Date, require: true},
    dateEvent:{ type: Date, require: true},
    dateReturn: { type: Date, require: true},
    days: { type: Number, require: true},
    totalPrecio: { type: Number, require: true},
    products:[ {
        _id: { type: String },
        idProduct: { type: String,
          require: true },
        nameProduct: { type: String,
          require: true },
        description:{ type: String,
          require: true},
        type:{ type: String,
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
export default mongoose.model("Order", orderSchema);

