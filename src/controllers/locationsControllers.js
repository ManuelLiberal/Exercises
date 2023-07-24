//*Importar los controladores (que en este caso van a ser dos)
const {
  getNormalizedStreet,
  getDistanceToObelisk,
} = require("../services/locationsServices");

//----CONTROLADOR CALLE NORMALIZADA ---

const getNormalizedStreetController = async (req, res) => {
  const { province, street, streetNumber, department } = req.body;
  try {
    if (!province || !street || !streetNumber) {
      throw new Error("Faltan datos obligatorios");
    }
    if (typeof province !== "string" || typeof street !== "string") {
      throw new Error("Algunos datos deben ser texto");
    } else {
      //?---------LLamado al controlador-------
      const normalizedStreet = await getNormalizedStreet(
        province,
        street,
        streetNumber,
        department
      );
      res.status(200).json(normalizedStreet);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//----CONTROLADOR OBELISCO ---

const getDistanceToObeliskController = async (req, res) => {
  const { normalizedStreet } = req.body;
  try {
    if (!normalizedStreet)
      throw new Error("No has ingresado ninguna dirección");
    if (typeof normalizedStreet !== "string")
      throw new Error("La dirección debe ser de tipo texto");
    const distance = await getDistanceToObelisk(normalizedStreet);
    res.status(200).json(distance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getNormalizedStreetController,
  getDistanceToObeliskController,
};
