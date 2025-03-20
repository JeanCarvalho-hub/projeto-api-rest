import Sequelize from "sequelize";
import databaseConfig from "../config/database.cjs";
import login from "../models/login.js";

const models = [login];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
