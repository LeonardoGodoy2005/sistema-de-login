const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();

const SECRET = "segredo_super_secreto";

app.use(cors());
app.use(express.json());


let usuarios = [];


app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});


app.post("/register", async (req, res) => {
  const { email, senha } = req.body;

  const existe = usuarios.find(u => u.email === email);

  if (existe) {
    return res.status(400).json({ message: "Usuário já existe" });
  }

  const senhaCriptografada = await bcrypt.hash(senha, 10);

  usuarios.push({
    email,
    senha: senhaCriptografada
  });

  res.json({ message: "Usuário cadastrado com sucesso!" });
});

app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  const user = usuarios.find(u => u.email === email);

  if (!user) {
    return res.status(400).json({ message: "Usuário não encontrado" });
  }

  const senhaValida = await bcrypt.compare(senha, user.senha);

  if (!senhaValida) {
    return res.status(400).json({ message: "Senha inválida" });
  }

  const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });

  res.json({ token });
});


function autenticar(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Sem token" });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Token inválido" });
  }
}


app.get("/dashboard", autenticar, (req, res) => {
  res.json({
    message: "Acesso permitido",
    user: req.user
  });
});


app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});