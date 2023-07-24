const { default: axios } = require("axios");
const compareCoor = require("../helpers/compareCoor");

//?------CONTROLADOR DIRECCIÓN NORMALIZADA---------

const getNormalizedStreet = async (
  province,
  street,
  numberStreet,
  department
) => {
  const direction = `${street} ${numberStreet}`;
  let endPoint;

  //Valido si hay o no departamento

  if (department === undefined || !department.length) {
    endPoint = `https://apis.datos.gob.ar/georef/api/direcciones?direccion=${direction}&provincia=${province}&aplanar=true&campos=estandar&max=100&exacto=true`;
  } else {
    endPoint = `https://apis.datos.gob.ar/georef/api/direcciones?direccion=${direction}&provincia=${province}&departamento=${department}&aplanar=true&campos=estandar&max=100&exacto=true`;
  }

  //Realizo la petición

  const { data } = await axios.get(endPoint);
  const { direcciones } = data;

  //Contemplo las posibles respuestas

  if (!data.cantidad) {
    throw new Error("La dirección ingresada no arrojó ninguna coincidencia");
  }
  if (data.cantidad === 1) {
    const normalizedStreet = direcciones[0].nomenclatura;
    return normalizedStreet;
  }
  if (data.cantidad > 1) {
    let localities = [];
    direcciones.map((arr) => {
      localities.push(arr.localidad_censal_nombre);
    });
    return Array.from(new Set(localities));
  }
};

//------CONTROLADOR OBELISCO---------

const getDistanceToObelisk = async (normalizedStreet) => {
  let direction;
  let department;
  let province;
  try {
    direction = normalizedStreet.split(",")[0].trim();
    department = normalizedStreet.split(",")[1].trim();
    province = normalizedStreet.split(",")[2].trim();
  } catch (error) {
    // throw new Error("No conozco esa dirección");
    return "No conozco esa dirección";
  }
  const endPoint = `https://apis.datos.gob.ar/georef/api/direcciones?direccion=${direction}&provincia=${province}&departamento=${department}&aplanar=true&campos=estandar&max=100&exacto=true`;

  const { data } = await axios.get(endPoint);
  const { direcciones } = data;
  if (!direcciones.length) throw new Error("La dirección no se encuentra");
  const { ubicacion_lat, ubicacion_lon } = direcciones[0];
  const distanceInKm = compareCoor(ubicacion_lat, ubicacion_lon);
  if (distanceInKm <= 5) {
    return "Estás a menos de 5 Kilómetros del Obelisco";
  } else {
    return "Estás lejos del Obelisco";
  }
};

module.exports = { getNormalizedStreet, getDistanceToObelisk };
