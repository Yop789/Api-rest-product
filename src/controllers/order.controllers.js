import Orders from "../models/order";
import jwt from "jsonwebtoken";
import config from "../config";
import Product from "../models/Products";

export const createOrder = async (req, res) => {
  try {
    let token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, config.Secret);
    req.userId = decoded.id;

    console.log("Saving Cart");
    console.log(req.body);
    const {
      status,
      fullNameUser,
      paid,
      municipio,
      comunidad,
      calle,
      numero,
      email,
      telefono,
      dateDeliver,
      dateEvent,
      dateReturn,
      days,
      totalPrecio,
      products,
    } = req.body;
    console.log(req.body.products)
    const newOrder = {
      idUser: req.userId,
      status: status,
      fullNameUser: fullNameUser,
      paid: paid,
      municipio: municipio,
      comunidad: comunidad,
      calle: calle,
      numero: numero,
      email: email,
      telefono: telefono,
      dateDeliver: dateDeliver,
      dateEvent: dateEvent,
      dateReturn: dateReturn,
      days: days,
      totalPrecio: totalPrecio,
      products: products,
    };
    const order = new Orders(newOrder);
    const orderSeve = await order.save();

    res.status(201).json({ message: "Order succesfully saved" });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Se produjo un error a la hora de crear una order" });
  }
};
export const getOrder = async (req, res) => {
  try {
    const id = req.params.productId
    const order = await Orders.findById(id);
    res.status(201).json(order);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Se produjo un error a la hora de solicitar la Order" });
  }
};
export const getOrderUser = async (req, res) => {
  try {
    let token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, config.Secret);
    const order = await Orders.find({ idUser: decoded.id });
    res.status(201).json(order);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Se produjo un error a la hora de solicitar la Order" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.status(201).json(orders);
  } catch (error) {
    res.status(404).json({
      message: "Sucedio un error a la hora de realizar la peticion",
    });
  }
};


export const updateOrder = async (req, res) => {
  try {
    const order = await Orders.findByIdAndUpdate({ _id: req.params.productId, }, req.body,
      {
        new: true
      });
    res.status(201).json(order);
  } catch (error) {
    res.status(404).json({
      message: "Se produjo un error a la hora de actualizar la order",
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const id = req.params.productId
    const order = await Orders.findByIdAndDelete(id);
    res.status(201).json(order);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Se produjo un error a la hora de eliminar la order" });
  }
};

export const getOrderActualizaciones = async (req, res) => {
  try {
    const order = await Orders.find({}).sort({ updatedAt: 1 }).limit(3);
    res.status(201).json(order);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Se produjo un error a la hora de solicitar la Order" });
  }
};

export const getProductsDian = async (req, res) => {
  const id = req.params.productId;
  const fecha =  new Date();
  try {
    const diaOrder = await Orders.find({
      $or: [
        { dateDeliver: { $eq: fecha } },
        { dateEvent: { $eq: fecha } },
        { dateReturn: { $eq: fecha } },
      ],
      products: { $elemMatch: { idProduct: id } },
    },
    { "products.$": 1 });
    if (diaOrder.length > 0) {
      console.log('entro al disminucion');
      const product = await Product.findById(id);
      let totalAmount = 0;
      diaOrder.forEach(async function (e) {
          totalAmount += e.products[0].amount;
      });
      product.totalStock = product.totalStock - totalAmount;;
      res.status(200).json(product);
    } else {
      const product = await Product.findById(id);
      res.status(200).json(product);
    }
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ message: "Ocurrió un error al obtener el producto" });
  }
};
export const getProductsDianExacto = async (req, res) => {
  const id = req.params.productId;
  const {fecha}=req.body
  console.log(fecha)
  try {
    const diaOrder = await Orders.find({
      $or: [
        { dateDeliver: { $eq: new Date(fecha)} },
        { dateEvent: { $eq: new Date(fecha) } },
        { dateReturn: { $eq: new Date(fecha) } },
      ],
      products: { $elemMatch: { idProduct: id } },
    },
    { "products.$": 1 });
    if (diaOrder.length > 0) {
      console.log('entro al disminucion');
      const product = await Product.findById(id);
      let totalAmount = 0;
      diaOrder.forEach(async function (e) {
          totalAmount += e.products[0].amount;
      });
      product.totalStock = product.totalStock - totalAmount;;
      res.status(200).json(product);
    } else {
      const product = await Product.findById(id);
      res.status(200).json(product);
    }
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ message: "Ocurrió un error al obtener el producto" });
  }
};
