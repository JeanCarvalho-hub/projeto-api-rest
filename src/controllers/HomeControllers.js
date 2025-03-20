import login from '../models/login.js';

class HomeControll{
  async index(req, res) {
    const pessoa = await login.create({
      nome: 'jean',
      email: 'jean@gmail.com',
      password: 'jean123'
    });
    res.json(pessoa);
  };
};
export default new HomeControll();
