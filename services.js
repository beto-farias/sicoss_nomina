
//Import de la libreria de HTTPS
const https = require('https');

/**
 * Servicios para recuperar datos
 * 
 */
//================== BTO ===============

const URL = "https://hackaton.gruposicoss.com.mx/APIEnLinea/WSEnlinea.ashx?";

/**
 *  cuantas inasistencias han tenido los empleados en la ultima quincena
 */

 function getInasistenciasForm(){
    const QS = "accion=NLIncapacidades&r_FechaInicio=01/01/2016-31/03/2016";
    
    requestUrl(URL + QS);
 }


 //================== IVAN ===============


 //============ UTILIDADES ==============


 function requestUrl(url){
    https.get(url, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        process.stdout.write(d);
    });

    }).on('error', (e) => {
        console.error(e);
    });
 }
 
 getInasistenciasForm();