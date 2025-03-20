import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routerHome from './routers/homeRouters.js';

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
  }
}
export default new App().app;
