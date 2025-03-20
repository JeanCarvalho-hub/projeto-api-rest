import userModel from '../models/dbModel.js';

const aluno = async (req, res) => {
  try {
    const users = await new userModel().getUser('jean');
    res.json(users);
  } catch (error) {
    console.log('Erro ao buscar aluno', error);
    res.status(500).json({ error: 'Erro ao buscar aluno' });
  }
};

export default aluno;
