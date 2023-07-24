const degreesToRadians = require("./degreesToRadians");
const compareCoor = (lat, lon) => {
  //Coordenadas del obelisco ya pasadas a radiaanes
  //!COORDENADAS DEL OBELISCO
  //-34.603719, -58.381573;
  const latObelisk = -0.6039488299849196;
  const lonObelisk = -1.0189506713434235;

  //Conversión a radianes

  lat = degreesToRadians(lat);
  lon = degreesToRadians(lon);

  //Fórmula

  const RADIUS_EARTH_IN_KM = 6371;
  let difLatitude = lat - latObelisk;
  let difLongitude = lon - lonObelisk;
  let a =
    Math.pow(Math.sin(difLatitude / 2.0), 2) +
    Math.cos(lat) * Math.cos(lat) * Math.pow(Math.sin(difLongitude / 2.0), 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return RADIUS_EARTH_IN_KM * c;
};

module.exports = compareCoor;
