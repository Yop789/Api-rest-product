import mongoose, { Schema, Model } from "mongoose";

const dataSchema = new Schema(
  {
    lastname: { type: String, require: true },
    questio1:{ type: String, require: true },
   
  },

  {
    timestamps: true,
    versionKey: false,
  }
);
export default mongoose.model("db_data", dataSchema);
