const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const clientes = require("./routes/routes");

app.use(cors());
app.use(bodyParser());

app.use("/api", clientes);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});
