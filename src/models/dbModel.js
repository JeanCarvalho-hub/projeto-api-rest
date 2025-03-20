import db from './model.js';

class userModel{
  async getUser(nome){
    try{
      const [resul] = await db.execute(`
          SELECT * FROM aluno WHERE nome = ?
        `, [nome]);
        return resul;
    }catch(e){
      console.log('Erro ao buscar aluno', e);
    }
  };
  async createUser(nome, idade, turma){
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
};
export default userModel;
