const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Rota da calculadora
app.post("/calcular", (req, res) => {
  const { num1, num2, operacao } = req.body;

  let resultado;

  switch (operacao) {
    case "soma":
      resultado = num1 + num2;
      break;
    case "subtracao":
      resultado = num1 - num2;
      break;
    case "multiplicacao":
      resultado = num1 * num2;
      break;
    case "divisao":
      resultado = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero";
      break;
    default:
      return res.status(400).json({ erro: "Operação inválida" });
  }

  res.json({ resultado });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
