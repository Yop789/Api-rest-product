import CodigoPostal from "../models/codigoPostal";

export const getRegioCP = async (req, res) => {
    try {
        const {cp}=req.body
      const region = await CodigoPostal.find({d_codigo:cp})
      res.status(200).json(region);
    } catch (error) {
      res
        .status(404)
        .json({ menssage: "Sucedio un error a la hora de optener el producto" });
    }
  };
