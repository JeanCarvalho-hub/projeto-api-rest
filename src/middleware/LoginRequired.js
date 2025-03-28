import jwt from 'jsonwebtoken';

export default (req, res, next) =>{
  const {authorization} = req.headers;
  if(!authorization) return res.status(401).json({Error: 'Necessário fazer login'});
  const [bearer, token] = authorization.split(' ');
  try{
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const {id, email} = dados;
    req.id = id;
    req.email = email;
    return next();
  }catch(e){
    res.status(401).json({Error: 'Token invalido'});
  }
}
