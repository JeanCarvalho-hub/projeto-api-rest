import login from '../models/tokenModel.js';
import jwt from 'jsonwebtoken';

class TokenController{
  async store(req, res){
    const user = new login(req.body);
    const userInsert = await user.autenticar()
    if(user.error.length > 0){
      res.json({Messagem: user.error});
      return;
    }
  const {id, email} = userInsert
  const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION
  });
  res.json({Messagem: 'Login realizado', Token: token});
  }
}
export default new TokenController();
