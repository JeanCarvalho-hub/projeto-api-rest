import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routerHome from './routers/homeRouters.js';
import tokenRouter from './routers/tokenRouters.js'

class App{
  constructor(){
    this.app = express();
    this.middleware();
    this.routes();
  }
  middleware(){
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }
  routes(){
    this.app.use(routerHome);
    this.app.use(tokenRouter);
  }
}
export default new App().app;
