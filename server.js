const express = require('express'); 
const mysql = require('mysql2');
const dotenv = require('dotenv');
const cors = require('cors');  // Mover o require do CORS para o começo

dotenv.config();

const app = express();  // Agora o 'app' é inicializado
app.use(cors());  // CORS é configurado depois da inicialização de 'app'

const port = 3000;

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL com sucesso!');
});

// Rota simples para teste
app.get('/', (req, res) => {
  res.send('API do Kaleb está rodando!');
});

// Rota para pegar perguntas
app.get('/perguntas/:id', (req, res) => {
  const id = req.params.id;
  const query = `
    SELECT 
      p.cdPergunta,
      p.Enunciado,
      p.Categoria,
      r.cdResposta,
      r.ConteudoResposta,
      t.correta
    FROM 
      PerguntasTeste p
    JOIN 
      TesteLogica t ON p.cdPergunta = t.idPergunta
    JOIN 
      RespostaTeste r ON t.idResposta = r.cdResposta
    WHERE 
      p.cdPergunta = ?
  `;

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Erro na consulta:', err);
      res.status(500).json({ error: 'Erro no servidor' });
    } else {
      if (results.length > 0) {
        const pergunta = {
          cdPergunta: results[0].cdPergunta,
          Enunciado: results[0].Enunciado,
          Categoria: results[0].Categoria,
          Respostas: results.map(row => ({
            cdResposta: row.cdResposta,
            Conteudo: row.ConteudoResposta,
            correta: !!row.correta
          }))
        };
        res.json(pergunta);
      } else {
        res.status(404).json({ error: 'Pergunta não encontrada' });
      }
    }
  });
});


app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://192.168.0.165:${port}`);
});
