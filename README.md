## Ejercicios

### Normalizador de direcciones
- El objetivo es hacer exponer una API Rest que recibe una "Calle" y devuelve la Calle normalizada. Para obtener la información se utilizó la siguiente [API](https://datosgobar.github.io/georef-ar-api/addresses/)
### Cálculo de distancia}
-El objetivo es hacer exponer una API Rest que recibe una "Dirección" (normalizada) y responde si está
cerca del Obelisco o no. Se utilizó la misma [API](https://datosgobar.github.io/georef-ar-api/addresses/) que en el ejercicio anterior.
### Obtener nombre de Moneda
- El objetivo es exponer un servicio Rest que recibe por parámetro el nombre de un país y
devuelve el nombre de su moneda. Ejemplo, si recibe "Argentina" devuelve "pesos". Para obtener esto se utilizaron los siguientes [servicios SOAP](http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL).
### Extraer info
- El objetivo es exponer un servicio Rest que no recibe parámetros, para ello. se consultó la [API](https://627303496b04786a09002b27.mockapi.io/mock/sucursales) para devolver cuantas entidades son femeninas y cuantas masculinas, y el
listado de países sin repetir.

## Probando las rutas con Postman

Si deseas probar las rutas de este proyecto utilizando Postman, puedes importar fácilmente todas las solicitudes HTTP en tu propia instancia de Postman siguiendo estos pasos:

1. Accede a la colección de Postman haciendo clic en el enlace [aquí](postmanConfig/exercises.postman_collection.json).
2. Abre Postman en tu computadora.
3. En la barra lateral izquierda, haz clic en el botón "Importar" y selecciona la pestaña "Archivo".
4. Selecciona el archivo "exercises.postman_collection.json" y haz clic en "Abrir".
5. ¡Listo! Ahora deberías ver la colección importada en el panel izquierdo de Postman. ¡Puedes comenzar a probar las rutas de este proyecto!
