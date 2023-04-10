/**
 * @author Equpo 
 * @description Router of function crud
 * @version auth
 */

import {Router} from 'express'
import * as productsCtrol from "../controllers/products.controllers";
import * as authCtrol from "../controllers/auth.controllers"
import {autheJWT} from '../middlewares/index';
import multer from "../libs/multer";
import * as cartCtrol from "../controllers/cart.controllers";
import * as OrderCtrol from '../controllers/order.controllers';
import * as codigoCtrol from "../controllers/codigo.controllers";
import * as userCtrol from "../controllers/user.controllers";
import { getRegioCP } from '../controllers/cp.controllers';

const router = Router();
router.route('/products')
    .post([autheJWT.verifyToken,autheJWT.isAdmin],multer.single('imagePath'),productsCtrol.createProduct)
    .get(productsCtrol.getProducts)

router.route('/product/:productId')
    .get(productsCtrol.getProductById)
    .put(productsCtrol.updateProductById)
    .delete(productsCtrol.deleteProductById)

router. post('/signup',authCtrol.signUp)
router. post('/signin',authCtrol.signIn)

router.route('/cart')
    .post(autheJWT.verifyToken,cartCtrol.createCart)
    .get(autheJWT.verifyToken,cartCtrol.getCart)
    .put(autheJWT.verifyToken,cartCtrol.updateCart)
    .delete(autheJWT.verifyToken,cartCtrol.deleteCart)
router.route('/order')
    .post(autheJWT.verifyToken,OrderCtrol.createOrder)
    .get(autheJWT.verifyToken,OrderCtrol.getOrders)

router.route('/order/:productId')
    .put(autheJWT.verifyToken,OrderCtrol.updateOrder)
    .get(autheJWT.verifyToken,OrderCtrol.getOrder)
    .delete(autheJWT.verifyToken,OrderCtrol.deleteOrder)

router.route('/codigo')
    .post(codigoCtrol.createCodigo)
    

router.route('/cambiarC')
    .put(codigoCtrol.codigoComparar,userCtrol.cambiarContraseña)
    
router.route('/copContras')
    .post(codigoCtrol.codigoCompararA)

router.route('/carrucel')
    .get(productsCtrol.carrucel)

router.route('/cPostal')
    .post(getRegioCP)


// ----------------------------------------------------------------------
router.route('/user/:userId')
    .get(autheJWT.verifyToken, userCtrol.getUser)
    .put(autheJWT.verifyToken, userCtrol.updateUserById)

router.route('/productType')
    .post(autheJWT.verifyToken,productsCtrol.getProductsType)

router.route('/productTypeLimit')
    .post(productsCtrol.getProductsTypeLimit)


export default router;