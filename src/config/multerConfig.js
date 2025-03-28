import { fileURLToPath } from 'url';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import fotoDb from '../models/dbFotoModel.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const numberRandom = Math.floor(Math.random() * 1000 + 1000);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const userFolder = path.resolve(dirname, '..', '..', 'uploads', String(req.id));

    // Criar a pasta do usuário se não existir
    if (!fs.existsSync(userFolder)) {
      fs.mkdirSync(userFolder, { recursive: true }); // o recursive serve para criar o caminho tood
    }

    cb(null, userFolder); //antes dele chegar aqui, ele já criou a pasta
  },
  filename: (req, file, cb) => {
    const nameFile = `${Date.now()}_${numberRandom}${path.extname(file.originalname)}`;
    req.savedFilename = nameFile; // Salva o nome do arquivo para usar depois no banco
    cb(null, nameFile);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
    return cb(new multer.MulterError('Arquivo inválido'));
  }
  cb(null, true);
};

// Middleware para salvar no banco após o upload
const salvarDb = async (req, res, next) => {
  if (!req.file) {
    return next(new Error('Nenhum arquivo foi enviado.'));
  }

  try {
    const wayDb = `/uploads/${req.id}/${req.savedFilename}`;
    const foto = new fotoDb();
    await foto.add(req.id, wayDb);

    console.log('Imagem salva no banco:', wayDb);
    next();
  } catch (e) {
    console.log('Erro ao salvar no banco:', e);
    next(e);
  }
};

const upload = multer({ storage, fileFilter }); // a ordem de executação do multer é o fileFilter sendo o primeiro, se ele permitir, ele executa o storage

export { upload, salvarDb };
