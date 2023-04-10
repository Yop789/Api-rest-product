import Carts from "../models/cart";
import jwt from "jsonwebtoken";
import config from "../config";

export const createCart = async (req, res) => {
  try {
    let token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, config.Secret);
    req.userId = decoded.id;

    console.log("Saving Cart");
    console.log(req.body);
    const { products } = req.body;
    const newCart = {
      idUser: req.userId,
      products: products,
    };
    const cart = new Carts(newCart);
    const cartSeve = await cart.save();
    console.log(cart);
    res.status(201).json({ message: "Cart succesfully saved" });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Se produjo un error a la hora de crear un cart" });
  }
};

export const getCart = async (req, res) => {
  try {
    let token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, config.Secret);
    req.userId = decoded.id;
    const cart = await Carts.find({ idUser: req.userId });
    res.status(201).json(cart);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Se produjo un error a la hora de crear un getCarts" });
  }
};
export const updateCart = async (req, res) => {
  try {
    let token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, config.Secret);
    req.userId = decoded.id;

    const cart = await Carts.updateOne({ idUser: req.userId }, req.body, {
      new: true,
    });
    res.status(201).json({message:"Actualizacion completa"});
  } catch (error) {
    res
      .status(404)
      .json({ message: "Se produjo un error a la hora de actualizar un getCarts" });
  }
};
export const deleteCart = async (req, res) => {
  try {
    let token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, config.Secret);
    req.userId = decoded.id;

    const cart = await Carts.deleteOne({ idUser: req.userId });
    res.status(201).json({message:"Se ha eliminado correctamente completa"});
  } catch (error) {
    res
      .status(404)
      .json({ message: "Se produjo un error a la hora de actualizar un getCarts" });
  }
};
