import {Router} from 'express';
//Controllers
import {
    getAll,
    getOne,
    postUser,
    updateUser,
    deleteUser
} from '../controllers/user.controllers.js';
const router = Router();

router.get('/', (req, res) => {
    res.send("Hola mundo.")
});

//GetAll
router.get('/user',getAll);
//GetOne
router.get('/user/:id',getOne);
//Post
router.post('/user',postUser);
//Update
router.put('/user/:id',updateUser);
//Delete
router.delete('/user/:id',deleteUser);

export default router;