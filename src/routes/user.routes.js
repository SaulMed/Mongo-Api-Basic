import { Router } from 'express';
//Controllers
import {
    getAllUsers,
    getOneUser,
    postUser,
    updateUser,
    deleteUser
} from '../controllers/user.controllers.js';
const router = Router();



//Schema User
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: Identificador unico del usuario
 *              name:
 *                  type: string
 *                  description: Nombre del usuario
 *              surname:
 *                  type: string
 *                  description: Apellido del usuario
 *              age:
 *                  type: integer
 *                  description: Edad del usuario
 *          required:
 *              - name
 *              - surname
 *              - age
 *          example:
 *              name: Saul
 *              surname: Medina
 *              age: 25
 */

//GetAll
/**
 * @swagger
 * /api/user:
 *  get:
 *      summary: Obtener todos los usuarios.
 *      tags: [User]
 *      responses:
 *          200:
 *              description: Usuarios obtenidos exitosamente.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#/components/schemas/User'
 */
router.get('/user', getAllUsers);

//GetOne
/**
 * @swagger
 * /api/user/{id}:
 *  get:
 *      summary: Obtener un unico usuario.
 *      tags: [User]
 *      parameters:
 *          -   name: id
 *              in: path
 *              required: true
 *              description: Identificador del usuario a buscar.
 *              schema:
 *                  type: string
 *      responses:
 *          200:
 *              description: Usuario encontrado.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: Usuario no encontrado.
 */
router.get('/user/:id', getOneUser);

//Post
/**
 * @swagger
 * /api/user:
 *  post:
 *      summary: Crear un nuevo usuario.
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: El usuario se creo exitosamente.
 */
router.post('/user', postUser);

//Update
/**
 * @swagger
 * /api/user/{id}:
 *  put:
 *      summary: Actualizar un usuario.
 *      tags: [User]
 *      parameters:
 *          -   name: id
 *              in: path
 *              required: true
 *              description: Identificador del usuario a actualizar.
 *              schema:
 *                  type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: Usuario actualizado.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: Usuario no encontrado.
 */
router.put('/user/:id', updateUser);

//Delete
/**
 * @swagger
 * /api/user/{id}:
 *  delete:
 *      summary: Eliminar un usuario.
 *      tags: [User]
 *      parameters:
 *          -   name: id
 *              in: path
 *              required: true
 *              description: Identificador del usuario a eliminar.
 *              schema:
 *                  type: string
 *      responses:
 *          200:
 *              description: Usuario eliminado.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: Usuario no encontrado.
 */
router.delete('/user/:id', deleteUser);

export default router;