import Codigos from "../models/codigo";
import Users from "../models/User";
import * as enviar from "../EnviarGmail/codiGmail";

export const createCodigo = async (req, res) => {
  try {
    console.log("Saving Cart");
    console.log(req.body);
    const { correoElectronico } = req.body;
    const cod = generarCodigoAleatorio();

    const user = await Users.find({ email: correoElectronico , status:{$ne:false}});
    if (user.length > 0) {
      const newCodigo = {
        codigo: cod,
        correoElectronico,
      };
      console.log(newCodigo);
      const codigo = new Codigos(newCodigo);
      const cartSeve = await codigo.save();
      enviar.enviarEmailCodigo(cod, correoElectronico);
      res.status(201).json({ message: "Se envio un correo con codigo" });
    } else res.status(404).json({ message: "Email incorrecto" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error intentalo de nuebo" });
  }
};

function generarCodigoAleatorio() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export const codigoComparar = async (req, res, next) => {
  try {
    const { codigo } = req.body;
    const respuestCodigo = await Codigos.find({ codigo: codigo });
    if (respuestCodigo.length > 0) {
      next();
    } else {
      res
        .status(404)
        .json({
          message:
            "El codigo no es correcto intentalo nuebamente tiene 5 munutos",
        });
    }
  } catch (error) {
    res.status(404).json({ message: "Error al  aser la peticion del codigo" });
  }
};

export const codigoCompararA = async (req, res, next) => {
  try {
    const { correoElectronico, codigo } = req.body;
    const respuestCodigo = await Codigos.find({
      correoElectronico: correoElectronico,
      codigo: codigo,
    });
    if (respuestCodigo.length > 0) {
      res.status(200).json({ message: "codigo correcto" });
    } else {
      res
        .status(404)
        .json({
          message:
            "El codigo no es correcto intentalo nuebamente tiene 5 munutos",
        });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error al  aser la peticion del codigo" });
  }
};
