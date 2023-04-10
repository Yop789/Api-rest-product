import Role from "../models/Role.js";
import User from "../models/User.js";
import Codigos from "../models/codigo";
import { ADMIN_EMAIL, ADMIN_USERNAME, ADMIN_PASSWORD } from "../config.js";

export const createRoles = async () => {
  try {
    // Count Documents
    const count = await Role.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    // Create default Roles
    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  // check for an existing admin user
  const userFound = await User.findOne({ email: "aa@33377.dofes" });
  const userCode = await User.findOne({ correoElectronico: 'aa@33377.dofes' });
  if (userFound) {
    return
  }else{
    // get roles _id
  const roles = await Role.find({ name: { $in: ["admin", "moderator"] } });

  // create a new admin user
  const newUser = await User.create({
    username: 'jdnjndjnjndd',
    email: "aa@33377.dofes",
    lastName: 'jfnjfnjdnf',
    password: await User.encryptPassword('user234'),
    municipio: 'jfnjfnjdnf',
    comunidad: 'jfnjfnjdnf',
    calle: 'jfnjfnjdnf',
    numero: '1',
    telefone: '1234567810',
    roles: roles.map((role) => role._id),
  });
  if(userCode){
    const l = await Codigos.create({
      codigo: 234231,
      correoElectronico: 'aa@33377.dofes',
      expiraEn: null,
    });
  }
  console.log(`new user created: ${newUser.email} `);
  }

  
};

// createRoles();
createAdmin();

