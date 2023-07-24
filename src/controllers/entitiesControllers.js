//*Importar los controladores (que en este caso van a ser dos)
const { getInfo } = require("../services/entitiesServices");

const getInfoController = async (req, res) => {
  try {
    const info = await getInfo();
    res.status(200).send(info);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { getInfoController };
