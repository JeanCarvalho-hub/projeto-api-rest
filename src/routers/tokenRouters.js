import { Router } from 'express';
import tokenControll from '../controllers/tokenControll.js';

const routerToken = new Router();

routerToken.post('/', tokenControll.store);

export default routerToken;
