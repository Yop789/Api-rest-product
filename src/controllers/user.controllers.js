import User from "../models/User.js";
import Role from "../models/Role.js";
import jwt from "jsonwebtoken";
import config from "../config";

export const createUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    let token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, config.Secret);
    const users = await User.find({ _id: { $ne: decoded.id }, status:{$ne:false}});
    return res.status(200).json(users);
  } catch (error) {
    console.log(error)
  }

};

export const getUsersDesabilita = async (req, res) => {
  try {
    let token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, config.Secret);
    const users = await User.find({status:false});
    return res.status(200).json(users);
  } catch (error) {
    console.log(error)
  }

};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("roles");
    return res.status(200).json(user);
  } catch (error) {
    console.log(error)
  }

};


export const deleteUser = async (req, res) => {
  try {
    req.body={
      status:false
    }
    const user = await User.findByIdAndUpdate(req.params.userId,req.body,
      {
        new: true,
      });
    return res.status(200).json({menssage:'Usuario eliminado correctamente'});
  } catch (error) {
    return res.status(400).json({menssage:'Fallo al eliminar'});
  }

};
export const updateUserById = async (req, res) => {
  try {
    console.log(req.body.roles);
    if (req.body.roles) {
      const foundRoles = await Role.find({ name: { $in: req.body.roles } });
      req.body.roles = foundRoles.map((role) => role._id);
    } 
    const updateUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(404).json({
      menssage: "Se encontro un error a la hora de realisar la actualizacion",
    });
  }
};

export const cambiarContraseña = async (req, res) => {
  try {
    const { correoElectronico, password } = req.body;
    const l = {
      password: await User.encryptPassword(password)
    }
    const user = await User.find({ email: correoElectronico });
    console.log(req.body.correoElectronico)

    if (user.length > 0) {
      const ubdateUser = await User.updateOne(
        { email: correoElectronico },
        l,
        {
          new: true,
        }
      );
      res.status(201).json({ messege: "Actualisasion existosa" });
    } else {
      res.status(404).json({ messege: "Correo no encontrado" })
    }
  } catch (error) {
    console.log(error)
    res.status(404).json({
      messege: "Sucedio un error a la hora de actualizar tu contraseña",
    });
  }
};
export const getUserActualizaciones = async (req, res) => {
  try {
    const user = await User.find({}).sort({updatedAt:1}).limit(3).populate("roles");
    return res.status(200).json(user);
  } catch (error) {
    console.log(error)
  }

};
