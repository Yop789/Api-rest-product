import { Schema,model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    
    email: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    municipio: {
      type: String,
      required: true,
    },
    comunidad: {
      type: String,
      required: true,
    },
    calle: {
      type: String,
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
    telefone: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

// userSchema.pre("save", async function (next) {
//   const user = this;
//   if (!user.isModified("password")) {
//     return next();
//   }
//   const hash = await bcrypt.hash(user.password, 10);
//   user.password = hash;
//   next();
// })
export default model ('User',userSchema);
