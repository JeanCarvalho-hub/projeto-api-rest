import db from './model.js';
import validator from 'validator';
import bcrypt from 'bcrypt';

class Login{
  constructor(req){
    this.body = req;
    this.error = [];
    this.user = null
  }
  async autenticar(){
    this.inserir();
    const [userDb] = await db.execute(`
      SELECT * FROM user WHERE email = ?
      `, [this.user.email]);
    const userFormat = userDb[0];
    if(!userFormat){
      this.error.push('Email não encontrado');
      return
    }
    const hash = bcrypt.compareSync(this.user.senha, userFormat.password_hash);
    if(!hash){
      this.error.push('Senha incorreta');
      return
    }
    return userFormat;
  }
  async inserir(){
    this.user = {
      email: this.body.email,
      senha: this.body.senha
    }
  }

}
export default Login;
//criar duas funções: validar e inserir
