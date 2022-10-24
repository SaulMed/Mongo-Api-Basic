import { Router } from 'express';
//Controllers
import {
    getAllProducts,
    getOneProduct,
    postProduct,
    updateProduct,
    deleteProduct
} from '../controllers/product.controller.js';

const router = Router();

//Schema Product
/**
 * @swagger
 *  components:
 *      schemas:
 *          Product:
 *              type: object
 *              properties:
 *                  id:
 *                      type: string
 *                      description: Identificador unico del Producto
 *                  name:
 *                      type: string
 *                      description: Nombre del producto
 *                  category:
 *                      type: string
 *                      description: Categoria del producto
 *                  price:
 *                      type: integer
 *                      description: Precio del producto
 *              required:
 *                  - name
 *                  - category
 *                  - price
 *              example:
 *                  name: Monitor
 *                  category: Computo
 *                  price: 3850
 */


//GetAll
/**
 * @swagger
 * /api/product:
 *  get:
 *      summary: Obtener todos los productos.
 *      tags: [Product]
 *      responses:
 *          200:
 *              description: Productos obtenidos exitosamente.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 */
router.get('/product', getAllProducts);

//GetOne
/**
 * @swagger
 * /api/product/{id}:
 *  get:
 *      summary: Obtener un unico producto.
 *      tags: [Product]
 *      parameters:
 *          -   name: id
 *              in: path
 *              required: true
 *              description: Identificador del usuario a buscar.
 *              schema:
 *                  type: string
 *      responses:
 *          200:
 *              description: Producto encontrado.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Product'
 *          404:
 *              description: Producto no encontrado.
 */
router.get('/product/:id', getOneProduct);

//Post
/**
 * @swagger
 * /api/product:
 *  post:
 *      summary: Crear un nuevo producto.
 *      tags: [Product]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Product'
 *      responses:
 *          200:
 *              description: El producto se creo exitosamente.
 */
router.post('/product', postProduct);

//Update
/**
 * @swagger
 * /api/product/{id}:
 *  put:
 *      summary: Actualizar un producto.
 *      tags: [Product]
 *      parameters:
 *          -   name: id
 *              in: path
 *              required: true
 *              description: Identificador del producto a actualizar.
 *              schema:
 *                  type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Product'
 *      responses:
 *          200:
 *              description: Producto actualizado.
 *              content:
 *                  application/json:
 *                      type: object
 *                      $ref: '#/components/schemas/Product'
 *          404:
 *              description: Producto no encontrado.
 */
router.put('/product/:id', updateProduct);

//Delete
/**
 * @swagger
 * /api/product/{id}:
 *  delete:
 *      summary: Eliminar un producto.
 *      tags: [Product]
 *      parameters:
 *          -   name: id
 *              in: path
 *              required: true
 *              description: Identificador del producto a eliminar.
 *              schema:
 *                  type: string
 *      responses:
 *          200:
 *              description: Producto eliminado.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Product'
 *          404:
 *              description: Producto no encontrado.
 */
router.delete('/product/:id', deleteProduct);

export default router;