import { Router } from 'express';
import aluno from '../controllers/dbControll.js';

const router = new Router();

router.get('/', aluno);

export default router;
