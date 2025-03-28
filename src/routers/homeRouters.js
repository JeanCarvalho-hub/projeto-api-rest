import { Router } from 'express';
import {aluno, user, update, deleteUser, userHome} from '../controllers/dbControll.js';
import tokenControll from '../controllers/tokenControll.js';
import LoginRequired from '../middleware/LoginRequired.js';
import fotoControll from '../controllers/fotoControll.js';

const router = new Router();

router.get('/', LoginRequired, aluno);
router.post('/', tokenControll.store);
router.post('/create', user);
router.post('/photo',LoginRequired,fotoControll.store);
router.get('/home', LoginRequired, userHome);
router.put('/update/:id', LoginRequired, update)
router.delete('/delete/:id', LoginRequired, deleteUser);

export default router;
