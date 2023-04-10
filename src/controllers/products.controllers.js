import Product from "../models/Products";

export const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const {
      nameProduct,
      description,
      totalProduct,
      totalStock,
      totalService,
      totalSillas,
      type,
      price,
      oferta
    } = req.body;
    console.log(req.file?.path);

    const newProduct = new Product({
      nameProduct,
      description,
      totalProduct,
      totalStock,
      totalService,
      totalSillas,
      type,
      price,
      imagePath: req.file?.path,
      oferta:oferta
    });
    console.log(newProduct);
    const productSeve = await newProduct.save();

    res.status(201).json(productSeve);
  } catch (error) {
    console.log(error);
    res.status(404).json({ menssage: "Error de carga de datos " });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res
      .status(404)
      .json({ menssage: "Sucedio un error a la hora de optener el producto" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product);
  } catch (error) {
    res
      .status(404)
      .json({ menssage: "Se encontro un error a la hora de aser la petcion" });
  }
};

export const updateProductById = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(404).json({
      menssage: "Se encontro un error a la hora de realisar la actualizacion",
    });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.productId);
    res.status(200).json({ message: "Se a eliminado con exito" });
  } catch (error) {
    res
      .status(404)
      .json({
        message: "Se encontro un error a la hora de eliinar el producto",
      });
  }
};

export const carrucel = async (req, res) => {
  const carrucel = await Product.aggregate([
    { $match: { type: { $in: ["Silla", "Mesa", "Decorativo"] } } },
    { $group: { _id: "$type", id: { $push: "$_id" } } },
    {
      $project: {
        _id: {
          $arrayElemAt: [
            "$id",
            { $floor: { $multiply: [{ $size: "$id" }, { $rand: {} }] } },
          ],
        },
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "_id",
        foreignField: "_id",
        as: "documento",
      },
    },
    { $unwind: "$documento" },
    { $replaceRoot: { newRoot: "$documento" } },
  ]);
  res.status(200).json(carrucel)
};
export const getProductsType = async (req, res) => {
  try {
    
    const products = await Product.find({type:req.body.type},{});
    console.log(products)
    res.status(200).json(products);
  } catch (error) {
    res
      .status(404)
      .json({ menssage: "Sucedio un error a la hora de optener el producto" });
  }
};

export const getProductsTypeLimit = async (req, res) => {
  try {
    
    const products = await Product.find({type:req.body.type},{}).limit(4);
    console.log(products)
    res.status(200).json(products);
  } catch (error) {
    res
      .status(404)
      .json({ menssage: "Sucedio un error a la hora de optener el producto" });
  }
};
