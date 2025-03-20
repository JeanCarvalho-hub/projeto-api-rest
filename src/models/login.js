import Sequelize, {Model} from 'sequelize';

export default class login extends Model{
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
    }, {
      sequelize
    });
    return this;
  };

};
