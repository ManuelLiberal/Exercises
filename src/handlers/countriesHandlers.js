const { getCurrency, getCode } = require("../controllers/countriesControllers");

const getCurrencyHandler = async (req, res) => {
  const { country } = req.params;
  try {
    if (!country) throw new Error("Falta ingresar el país");
    if (typeof country !== "string" || Number(country)) {
      throw new Error("El país ingresado debe ser una cadena de texto");
    }
    const codeCountry = await getCode(country);
    const currency = await getCurrency(codeCountry);
    res.status(200).json(currency);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getCurrencyHandler };
