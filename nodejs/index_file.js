/*
Ejercicio de Node.js
Due Aug 26, 2022

Utilizar la librería faker para generar 1000 nombres falsos y utilizar el módulo fs para crear un archivo de texto 
y guardar los 1000 nombres.

Imprimir en consola un mensaje para avisar al usuario que el proceso ha terminado satisfactoriamente o con un error.

Bonus: Crear otro proyecto y utilizar ES6 Modules.
Instrucciones

    Crear la carpeta e inicializar el proyecto de npm.
    Instalar la librería faker
    Crear el archivo names.txt y escribir el código.
    Probar que funcione.
    Subir el resulta a un repositorio de Github. No incluir la carpeta node_modules (agregarla al .gitignore).
    Adjuntar el repositorio en el reporte.


*/

//https://www.npmjs.com/package/casual

let casual = require('casual');

let nameList= [];
for(let i=0; i<=1000;i++){
    nameList.push(casual.full_name);
}

var fs = require('fs'); 

fs.appendFile('names.txt', nameList.join(), function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 
