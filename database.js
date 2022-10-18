//modulo mongoose
const mongo = require('mongoose');

// conexion
(async () => {
    try {
        //cadena de conexion
        const db = await mongo.connect("mongodb://localhost:27017/MiDulceCaramelo");
        //comprobacion
        console.log("Conexion establecida en: " + db.connection.name);
    }catch(error){
        console.error(error);//mostrar error
    } 
})();