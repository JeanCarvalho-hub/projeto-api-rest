import { upload, salvarDb } from "../config/multerConfig.js";

class FotoController {
  async store(req, res) {
    upload.single("foto")(req, res, async (erro) => { //o upload retorna uma função de callback, e ai a função que está ao lado fica como argumento
      if (erro) {
        return res.status(400).json({ erro: erro.code });
      }

      try {
        await salvarDb(req, res, () => {}); // Chama a função para salvar no banco

        res.json({
          mensagem: "Upload realizado com sucesso!",
          caminho: `/uploads/${req.id}/${req.file.filename}`,
        });
      } catch (error) {
        res.status(500).json({ erro: "Erro ao salvar no banco." });
      }
    });
  }
}

export default new FotoController();
