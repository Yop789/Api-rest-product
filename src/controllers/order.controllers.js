import Orders from "../models/order";
import jwt from "jsonwebtoken";
import config from "../config";
import * as enviar from "../EnviarGmail/codiGmail";

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
      status:status,
      fullNameUser:fullNameUser,
      paid:paid,
      municipio:municipio,
      comunidad:comunidad,
      calle:calle,
      numero:numero,
      email:email,
      telefono:telefono,
      dateDeliver:dateDeliver,
      dateEvent:dateEvent,
      dateReturn:dateReturn,
      days:days,
      totalPrecio:totalPrecio,
      products:products,
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
    const id=req.params.productId
    const order = await Orders.findById(id);
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
    const order = await Orders.findByIdAndUpdate({ _id: req.params.productId, },req.body,
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
    const id=req.params.productId
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
    const order = await Orders.find({}).sort({updatedAt:1}).limit(3);
    res.status(201).json(order);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Se produjo un error a la hora de solicitar la Order" });
  }
};