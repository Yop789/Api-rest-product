import mongoose, { Schema, Model } from "mongoose";

const schema = new Schema({
  d_codigo: {
    type: String,
    required: true
  },
  d_asenta: {
    type: String,
    required: true
  },
  d_tipo_asenta: {
    type: String,
    required: true
  },
  D_mnpio: {
    type: String,
    required: true
  },
  d_estado: {
    type: String,
    required: true
  },
  d_CP: {
    type: String,
    required: true
  },
  c_estado: {
    type: String,
    required: true
  },
  c_oficina: {
    type: String,
    required: true
  },
  c_tipo_asenta: {
    type: String,
    required: true
  },
  c_mnpio: {
    type: String,
    required: true
  },
  id_asenta_cpcons: {
    type: String,
    required: true
  },
  d_zona: {
    type: String,
    required: true
  }
});

export default mongoose.model('Cp', schema);