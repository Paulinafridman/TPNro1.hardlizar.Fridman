// requerir y exporta
const fs = require("fs")
    

let sucursales = {
    bd: './data/theaters.json',
    titulo:"Nuestras Salas",
    leerJSON: function(){
        let theaterJSON = fs.readFileSync(this.bd, 'utf-8');
        let theater = JSON.parse(theaterJSON);
        return theater
    },
    cantidad: function(){
        return this.leerJSON().total_theaters
    },
listarCines:function(){
    let theaters = this.leerJSON();

    return theaters.theaters
},


}
module.exports =sucursales