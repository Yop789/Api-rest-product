import User from "../models/User.js";
import jwt from "jsonwebtoken";
import Role from "../models/Role.js";
import config from "../config";

export const signUp = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      lastName,
      municipio,
      comunidad,
      calle,
      numero,
      telefone,
      roles,
    } = req.body;
    const newUser = new User({
      username,
      email,
      lastName,
      municipio,
      comunidad,
      calle,
      numero,
      telefone,
      password: await User.encryptPassword(password),
      status:true,
    });
    console.log(newUser);
    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }
    const sevedUser = await newUser.save();
    console.log(sevedUser);
    res.status(200).json({mensaaje:"Guardado correctamente"});
  } catch (error) {
    if (error.name === "ValidationError") {
      const campoRequerido = Object.keys(error.errors)[0];
      res.json({ message: `El campo ${campoRequerido} es requerido` });
    } else {
      // Si se produce otro tipo de error, maneja el error de la manera que desees
      if (error.code === 11000) {
        res.status(404).json({ message: "El correo esta duplicado" });
      } else {
        console.log(error);
      }
    }
  }
};
export const signIn = async (req, res) => {
  try {
    // Request body email can be an email or username
    const userFound = await User.findOne({ email: req.body.email ,status:{$ne: false}}).populate(
      "roles"
    );

    if (!userFound)
      return res
        .status(400)
        .json({
          message:
            "El correo es incorrecto.",
        });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "La contraseña es incorrecta.",
      });
    const usuarios = [];
    if (userFound.roles.length > 0) {
      let numero = 0;
      userFound.roles.map(function (element) {
        usuarios[numero] = element.name;
        numero++;
      });
    } else {
      usuarios = userFound.roles[0].name;
    }
    const token = jwt.sign(
      { id: userFound._id, roles: usuarios },
      config.Secret,
      {
        expiresIn: 86400, // 24 hours
      }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
  }
};
