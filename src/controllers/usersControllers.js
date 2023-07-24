const { default: axios } = require("axios");

const getInfo = async () => {
  const endPoint =
    "https://627303496b04786a09002b27.mockapi.io/mock/sucursales";
  const { data } = await axios.get(endPoint);
  let maleCount = 0;
  let femaleCount = 0;
  let countries = [];
  data.forEach((entity) => {
    entity.genero === "male" ? maleCount++ : femaleCount++;
    countries.push(entity.pais);
  });
  const listCountries = Array.from(new Set(countries));
  const info = { maleCount, femaleCount, listCountries };
  return info;
};

module.exports = { getInfo };
