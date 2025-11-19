const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const orcamentosFile = path.join(__dirname, 'orcamentos.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Backend is running on port 5000');
});

// POST route for orcamento
app.post('/orcamento', (req, res) => {
  const { nome, email, telefone, assunto, conheceu, mensagem } = req.body;
  const novoOrcamento = {
    nome,
    email,
    telefone,
    assunto,
    conheceu,
    mensagem,
    data: new Date()
  };

  // Read existing orcamentos
  let orcamentos = [];
  if (fs.existsSync(orcamentosFile)) {
    try {
      const data = fs.readFileSync(orcamentosFile, 'utf8');
      orcamentos = JSON.parse(data);
    } catch (error) {
      console.error('Error reading orcamentos file:', error);
    }
  }

  // Add new orcamento
  orcamentos.push(novoOrcamento);

  // Write back to file
  try {
    fs.writeFileSync(orcamentosFile, JSON.stringify(orcamentos, null, 2));
    res.status(200).json({ message: 'Orçamento enviado com sucesso!' });
  } catch (error) {
    console.error('Error saving orcamento:', error);
    res.status(500).json({ error: 'Erro ao salvar o orçamento.' });
  }
});

// GET route to retrieve orcamentos
app.get('/orcamentos', (req, res) => {
  try {
    if (fs.existsSync(orcamentosFile)) {
      const data = fs.readFileSync(orcamentosFile, 'utf8');
      const orcamentos = JSON.parse(data);
      res.status(200).json(orcamentos);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    console.error('Error retrieving orcamentos:', error);
    res.status(500).json({ error: 'Erro ao recuperar os orçamentos.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
