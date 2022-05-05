var datos={
    id: 123,
    nombre: "jessica",
    edad: 27,
    pasatiempos: "Ver tv,pasear,leer",
    dato: function() {
        alert("nombre: "+this.nombre+"\n pasatiempos "+this.pasatiempos)
    }

}


datos.dato();