
//ImportdelalibreriadeHTTPS
consthttps=require('https');

/**
*Serviciospararecuperardatos
*
*/
//==================BTO===============


function getUrl(url, callback){
    let req = https.get(url, (res) => {
        res.on('data',(response) => {
            let result = JSON.parse(response);
            callback(result);
        });
    });
}


constURL="https://hackaton.gruposicoss.com.mx/APIEnLinea/WSEnlinea.ashx?";

/**
*cuantasinasistenciashantenidolosempleadosenlaultimaquincena
*/

functiongetInasistenciasFrom(inicio,fin){
constQS="accion=NLFaltas&r_Fecha="+inicio+"-"+fin;
url=URL+QS;
https.get(url,(res)=>{
console.log('statusCode:',res.statusCode);
console.log('headers:',res.headers);

res.on('data',(d)=>{
//process.stdout.write(d);
varjson=JSON.parse(d);
//for(vari=0;i<json.length;i++){
//console.log(json[i].departamento);
//
console.log("Numerodeinasistenciasdelperiodo...:"+json.length);
});

}).on('error',(e)=>{
console.error(e);
});
}


functiongetIncapacidadadesFrom(inicio,fin){
constQS="accion=NLIncapacidades&r_FechaInicio="+inicio+"-"+fin;
url=URL+QS;
https.get(url,(res)=>{
console.log('statusCode:',res.statusCode);
console.log('headers:',res.headers);

res.on('data',(d)=>{
//process.stdout.write(d);
varjson=JSON.parse(d);
//for(vari=0;i<json.length;i++){
//console.log(json[i].departamento);
//
console.log("Numerodeinasistenciasdelperiodo...:"+json.length);
});

}).on('error',(e)=>{
console.error(e);
});
}


//==================IVAN===============


//============UTILIDADES==============




getInasistenciasFrom("01/01/2016","20/02/2016");
//getIncapacidadadesFrom("01/01/2016","20/02/2016");