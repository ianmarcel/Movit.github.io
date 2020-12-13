const express = require("express");
const app = express();
const pool = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors({ origin: "https://ianmarcel.github.io/Movit.github.io" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(5000, () => {
  console.log("server ON: port: 5000");
});
app.get("/Login/:username/:password", async (req, res) => { //observa q username e password vc usou na 12
   /*Ele se referem aos parametros  da linha 374 do movit(o nome dos parametros com em C podem ser outros
    Mas tbm podia ser os mesmos nome ,senha*/
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const nome = await pool.query(
    `SELECT * FROM Cadastro WHERE NOME ='${req.params.username}'AND SENHA ='${req.params.password}'`
    //os nomes q eu passei na 374
    //obs:o login q tu fez(q n é um formulario é so uma div)Quando clica no enviar
  );
  //retornar vazio ou nao
  if ((nome.rowCount == 0)) { //nome é a variavel const
    res.sendStatus(404);
  } else {
    res.send(nome.rows[0]);
  }
});
app.get("/LoginCritico/:username/:password", async (req, res) => { //observa q username e password vc usou na 12
  /*Ele se referem aos parametros  da linha 374 do movit(o nome dos parametros com em C podem ser outros
   Mas tbm podia ser os mesmos nome ,senha*/
 /* recebe a requisição e deve fazer uma resposta (req, res) */
 const nome = await pool.query(
   `SELECT * FROM Critico WHERE NOME ='${req.params.username}'AND SENHA ='${req.params.password}'`
   //os nomes q eu passei na 374
   //obs:o login q tu fez(q n é um formulario é so uma div)Quando clica no enviar
 );
 //retornar vazio ou nao
 if ((nome.rowCount == 0)) { //nome é a variavel const
   res.sendStatus(404);
 } else {
   res.send(nome.rows[0]);
 }
});
app.post("/Cadastro", async (req, res) => {
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  console.log("cadastrando");
  const todos = await pool.query(
    `INSERT INTO Cadastro (NOME,EMAIL,SENHA,DATADENASCIMENTO,TELEFONE,GENERO,SEMANA)VALUES('${req.body.nome}','${req.body.email}','${req.body.senha}','${req.body.nascimento}','${req.body.telefone}','${req.body.ngeneros}','${req.body.semana}')`
  );
  res.redirect("http://127.0.0.1:5500/REVENDO2021/SiteCompleto/MovitAlt3.html");
});
app.post("/CadastroCritico", async (req, res) => {
  /* recebe a requisição e deve fazer uma resposta (req, res)*/
  console.log("cadastrando");
  const todos = await pool.query(
    `INSERT INTO Critico (NOME,EMAIL,SENHA,DATADENASCIMENTO,IDENTIFICADOR,SEMANA)VALUES('${req.body.nome}','${req.body.email}','${req.body.senha}','${req.body.nascimento}','${req.body.identificador}','${req.body.semana}')`
  );
  res.redirect("http://127.0.0.1:5500/REVENDO2021/SiteCompleto/MovitAlt3_VersaoCritico.html"); //A UNICA COISA Q EU ALTEREI 
});
app.post("/CadastroCompra", async (req, res) => {
  /* recebe a requisição e deve fazer uma resposta (req, res)*/
  console.log("cadastrando");
  const todos = await pool.query(
    `INSERT INTO Compras (NOMEFILME,GENEROFILME,SEMANA)VALUES('${req.body.nomeFilme}','${req.body.generoFilme}','${req.body.semana}')`
  );
  res.redirect("http://127.0.0.1:5500/REVENDO2021/SiteCompleto/MovitAlt3.html");
});
app.post("/InclueCritica", async (req, res) => {
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  console.log("cadastrando");
  const todos = await pool.query(
    `INSERT INTO RegistroCritica (CRITICA,SEMANA,NOMEFILME)VALUES('${req.body.escrever}','${req.body.semana}','${req.body.nomefilme}')`
  );//nomefilme
  res.redirect("http://127.0.0.1:5500/REVENDO2021/SiteCompleto/MovitAlt3.html");
});
app.get("/ImprimeCritica", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT CRITICA FROM RegistroCritica AS rc WHERE rc.nomefilme LIKE 'jurassicworld';  ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows);
  }
});
//TESTE
app.get("/ImprimeCriticaHomeAlone", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT CRITICA FROM RegistroCritica AS rc WHERE rc.nomefilme LIKE 'homealone'  ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows);
  }
});
//
app.get("/ImprimeCriticaGuerraInfinita", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT CRITICA FROM RegistroCritica AS rc WHERE rc.nomefilme LIKE 'guerrainfinita';  ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows);
  }
});
//
app.get("/ImprimeCriticaBadBoys3", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT CRITICA FROM RegistroCritica AS rc WHERE rc.nomefilme LIKE 'badboys3'  ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows);
  }
});
//
app.get("/ImprimeCriticaDoolittle", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT CRITICA FROM RegistroCritica AS rc WHERE rc.nomefilme LIKE 'doolittle'  ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows);
  }
});
//
app.get("/ImprimeCriticaJumanji", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT CRITICA FROM RegistroCritica AS rc WHERE rc.nomefilme LIKE 'jumanji'  ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows);
  }
});
//
app.get("/ImprimeCriticaToyStory", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT CRITICA FROM RegistroCritica AS rc WHERE rc.nomefilme LIKE 'toystory4'  ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows);
  }
});
app.get("/ImprimeCriticaUltimato", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT CRITICA FROM RegistroCritica AS rc WHERE rc.nomefilme LIKE 'ultimato'  ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows);
  }
});
//
app.get("/ImprimeCriticaJoker", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT CRITICA FROM RegistroCritica AS rc WHERE rc.nomefilme LIKE 'joker'  ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows);
  }
});
//
app.get("/ImprimeCriticaShazam", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT CRITICA FROM RegistroCritica AS rc WHERE rc.nomefilme LIKE 'shazam'  ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows);
  }
});
//
app.get("/ImprimeCriticaHomenaranha", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT CRITICA FROM RegistroCritica AS rc WHERE rc.nomefilme LIKE 'homenaranha'  ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows);
  }
});
//
app.get("/ImprimeCriticaOirlandes", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT CRITICA FROM RegistroCritica AS rc WHERE rc.nomefilme LIKE 'irlandes'  ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows);
  }
});

app.get("/QuantidadeFilmesComprados", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT COUNT (*) FROM Compras  AS co WHERE co.semana LIKE '7/12'` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows[0]);
  }
});
app.get("/QuantidadeCriticasFeitas", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT COUNT (*) FROM RegistroCritica  AS rc WHERE rc.semana LIKE '7/12' ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows[0]);
  }
});

app.get("/QuantidadeUsuarios", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT COUNT (*) FROM Cadastro AS ca WHERE ca.semana LIKE '7/12' ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows[0]);
  }
});
app.get("/QuantidadeCriticosCadastrados", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT COUNT (*) FROM Critico AS cr WHERE cr.semana LIKE '7/12' ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows[0]);
  }
});
//
app.get("/QuantidadeComprasPorFilmedeFiccao", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT COUNT (*) FROM Compras AS cr WHERE cr.generofilme LIKE 'ficcao'  ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows[0]);
  }
});
app.get("/QuantidadeComprasPorFilmedeAcao", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT COUNT (*) FROM Compras AS cr WHERE cr.generofilme LIKE 'acao'   ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows[0]);
  }
});
app.get("/QuantidadeComprasPorFilmeInfantil", async (req, res) => { 
  /* recebe a requisição e deve fazer uma resposta (req, res) */
  const tudo = await pool.query(
    `SELECT COUNT (*) FROM Compras AS cr WHERE cr.generofilme LIKE 'infantil' ` //como so tem um campo a tabela Critica n tem problema
    //`SELECT CRITICA FROM RegistroCritica WHERE SEMANA="5/12"`
  );
  //retornar vazio ou nao
  if ((tudo.rowCount == 0)) { //tudo é a variavel const
    res.sendStatus(404);
  } else {
    res.send(tudo.rows[0]);
  }
});
