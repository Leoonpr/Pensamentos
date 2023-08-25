const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pensamentos", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("conectamos com sucesso");
} catch (err) {
  console.log(`nao foi possivel conectar: ${err}`);
}

module.exports = sequelize