import { user } from '../controllers/dbControll.js';
import db from './model.js';
import bcrypt from 'bcrypt';

class userModel{
  async home(id){
    try{
      const [user] = await db.execute(`
        SELECT * FROM user WHERE id = ?
        `, [id]);
      return user[0];
    }catch(e){
      console.log('Erro em exibir seu usuário: ', e);
    };
  };
  async getUser(nome){
    try{
      const [resul] = await db.execute(`
          SELECT * FROM aluno WHERE nome = ?
        `, [nome]);
        return resul;
    }catch(e){
      console.log('Erro ao buscar aluno', e);
    };
  };
  async createAluno(nome, idade, turma){
    try{
      const userResul = await db.execute(`
          INSERT INTO aluno(nome, idade, turma) VALUES (?, ?, ?)
        `, [nome, idade, turma]);
        console.log('Cadastro do aluno realizado com sucesso');
        return userResul;
    }catch(e){
      console.log('Erro em criar aluno', e);
    }
  };
  async createUser(nome, email, pass){
    try{
      const pass_hash = await bcrypt.hash(pass, 10);
      const [createdResult] = await db.execute(`
        INSERT INTO user(user_name, email, password_hash) VALUES (?, ?, ?)
        `, [nome, email, pass_hash]);
      const [showUser] = await db.execute(`
        SELECT * FROM user WHERE id = ?
        `, [createdResult.insertId]);
        return showUser[0];
    }catch(e){
      console.log('erro em criar usuario ', e);
    };
  };
  async update(id, nomeNovo){
    try{
      const [updateUser] = await db.execute(`
        UPDATE user SET user_name = ? WHERE id = ?
        `, [nomeNovo, id]);
      const [showUserUpdated] = await db.execute(`
        SELECT * FROM user WHERE id = ?
        `, [id]);
      return showUserUpdated;
    }catch(e){
      console.log('erro em atualizar o usuario: ', e);
    };
  };
  async delete(id){
    try{
      const userDelete = await db.execute(`
        DELETE FROM user WHERE id = ?
        `, [id]);
        return {message: "Usuário deletado"};
    }catch(e){
      console.log('erro em deletar usuario: ', e)
    }
  }
};
export default userModel;
