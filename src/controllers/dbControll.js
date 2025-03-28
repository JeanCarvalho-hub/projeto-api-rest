import userModel from '../models/dbModel.js';

const userHome = async(req, res) => {
  try{
    const user = new userModel()
    const idUser = await user.home(req.id);
    res.json({Usuário: idUser});
  }catch(e){
    res.status(404).json({error: 'usuário não encontrado'});
  }
}

const aluno = async (req, res) => {
  try {
    const users = await new userModel().getUser(req.body.nome);
    res.json(users);
  } catch (error) {
    console.log('Erro ao buscar aluno', error);
    res.status(500).json({ error: 'Erro ao buscar aluno' });
  }
};
const user = async(req, res) => {
  try{
    const create = new userModel();
    const user = await create.createUser(req.body.nome, req.body.email, req.body.senha);
    res.json(user);
  }catch(e){
    console.log(e);
  }
};
const update = async(req, res) => {
  try{
    const update = new userModel();
    const userUpdated = await update.update(req.params.id, req.body.nome);
    res.json(userUpdated);
  }catch(e){
    console.log('erro em atualizar', e);
  }
};
const deleteUser = async(req, res) => {
  try{
    const dbDelete = new userModel();
    const userDeleted = await dbDelete.delete(req.params.id);
    res.json(userDeleted);
  }catch(e){
    console.log(e);
  }
};

export {aluno, user, update, deleteUser, userHome};
