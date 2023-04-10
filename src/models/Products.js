import mongoose, { Schema, Model } from "mongoose";

const productSchema = new Schema(
  {
    nameProduct: {
      type: String,
      require: true,
      unique: true
    },
    description: {
      type: String,
      required: true,
    },
    totalProduct: {
      type: Number,
      required: true,
    },
    totalStock: {
      type: Number,
      required: true,
    },
    totalService: {
      type: Number,
      required: true,
    },
    totalSillas: {
      type: Number
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imagePath: {
      type: String,
      require: true
    },
    oferta: [
      {
        typeOfer: {
          type: String,
          require: true
        },
        descProduct: { type: Number },
      }
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Product", productSchema);
