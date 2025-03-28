import db from './model.js';

class AdicionarFoto{
  async add(id_user, way){
    try{
      const [ user ] = await db.execute(`
        INSERT INTO foto (id_user, photo_way) VALUES (?, ?)
        `, [id_user, way]);
      return user[0];
    }catch(e){
      console.log('Erro em armazenar caminho da foto: ', e);
    }
  }
}
export default AdicionarFoto;
