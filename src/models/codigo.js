import mongoose, { Schema, Model } from "mongoose";

const codigoSchema = new Schema({
  codigo: { type: String, required: true },
  correoElectronico: { type: String, required: true },
  expiraEn: { type: Date, default: Date.now, expires: 300 }, // 300 segundos = 5 minutos
},{
  versionKey: false
});

export default mongoose.model("Codigo", codigoSchema);
