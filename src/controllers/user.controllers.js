import User from "../models/User.js";
import Role from "../models/Role.js";

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
  const users = await User.find();
  return res.json(users);
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.userId);
  return res.json(user);
};
export const updateUserById = async (req, res) => {
  try {
    console.log(req.body)
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
    const { correoElectronico,password } = req.body;
    const l={
      password:await User.encryptPassword(password)
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
    }else{
      res.status(404).json({messege:"Correo no encontrado"})
    }
  } catch (error) {
    console.log(error)
    res.status(404).json({
      messege: "Sucedio un error a la hora de actualizar tu contraseña",
    });
  }
};
