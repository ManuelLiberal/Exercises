const { default: axios } = require("axios");
const { parseString } = require("xml2js");

//Obtener codigo país

const getCode = async (country) => {
  const URL =
    "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";
  const soapMessage = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <CountryISOCode xmlns="http://www.oorsprong.org/websamples.countryinfo">
      <sCountryName>${country}</sCountryName>
    </CountryISOCode>
  </soap:Body>
</soap:Envelope>`;
  const config = {
    headers: {
      "Content-Type": "text/xml",
    },
  };
  let countryCode;
  const { data } = await axios.post(URL, soapMessage, config);
  parseString(data, (err, result) => {
    if (err) {
      console.error("Error al analizar el archivo xml");
    }
    countryCode =
      result["soap:Envelope"]["soap:Body"][0]["m:CountryISOCodeResponse"][0][
        "m:CountryISOCodeResult"
      ][0];
  });
  return countryCode;
};

//Obtener Moneda

const getCurrency = async (codeCountry) => {
  const URL =
    "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";
  const soapMessage = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <CountryCurrency xmlns="http://www.oorsprong.org/websamples.countryinfo">
      <sCountryISOCode>${codeCountry}</sCountryISOCode>
    </CountryCurrency>
  </soap:Body>
</soap:Envelope>`;
  const config = {
    headers: {
      "Content-Type": "text/xml",
    },
  };
  let currency;
  const { data } = await axios.post(URL, soapMessage, config);
  parseString(data, (err, result) => {
    if (err) {
      console.error("Error al analizar el archivo xml");
    }
    currency =
      result["soap:Envelope"]["soap:Body"][0]["m:CountryCurrencyResponse"][0][
        "m:CountryCurrencyResult"
      ][0]["m:sName"][0];
  });
  return currency;
};

module.exports = {
  getCode,
  getCurrency,
};
