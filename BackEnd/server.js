const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const Porta = 3000;

app.use(express.json());
app.use(cors());

// Caminho pro arquivo JSON
const CaminhoDB = './db.json';

// Rota GET - ler dados
app.get('/agenda', (req, res) => {
  const dados = JSON.parse(fs.readFileSync(CaminhoDB));
  res.json(dados);
});

// Rota POST - adicionar dado
app.post('/agenda', (req, res) => {
  const dados = JSON.parse(fs.readFileSync(CaminhoDB));
  dados.push(req.body);
  fs.writeFileSync(CaminhoDB, JSON.stringify(dados, null, 2));
  res.status(201).json({ msg: 'Registrado com sucesso' });
});

app.listen(Porta, () => console.log(`Backend funcionando! Porta usada: ${Porta}`));