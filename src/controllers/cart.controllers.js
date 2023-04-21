import Carts from "../models/cart";
import jwt from "jsonwebtoken";
import config from "../config";

export const createCart = async (req, res) => {
  try {
    let token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, config.Secret);

    console.log("Saving Cart");
    const exist = await Carts.find({ idUser: decoded.id, })
    if (exist.length > 0) {
      console.log(req.body.products)
      if (req.body.products.length === 0) {
        const cart = await Carts.deleteOne({ idUser: decoded.id });
        res.status(201).json({ message: "Se ha eliminado correctamente completa" });
      } else {
        const cart = await Carts.updateOne({ idUser: decoded.id }, req.body, {
          new: true,
        });
        res.status(201).json({ message: "Actualizacion completa" });
      }
    } else {
      const { fecha,products } = req.body;
      const newCart = {
        idUser: decoded.id,
        fecha:fecha,
        products: products,
      };
      const cart = new Carts(newCart);
      const cartSeve = await cart.save();
      console.log(cart);
      res.status(201).json({ message: "Cart succesfully saved" });
    }

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
    const cart = await Carts.find({ idUser: decoded.id });
    if (cart.length !== 0) {
      res.status(200).json(cart);
    } else return res.json({ message: 'Nu hay camionsito precargado' });
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
    req.body.idUser = decoded.id;

    const cart = await Carts.updateOne({ idUser: decoded.id }, req.body, {
      new: true,
    });
    res.status(201).json({ message: "Actualizacion completa" });
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

    const cart = await Carts.deleteOne({ idUser: decoded.id });
    res.status(201).json({ message: "Se ha eliminado correctamente completa" });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Se produjo un error a la hora de actualizar un getCarts" });
  }
};
