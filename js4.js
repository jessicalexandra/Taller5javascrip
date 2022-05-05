

for (let i = 0; i < 2; i++) {
    var objeto={
        nombre: prompt("ingrese el nombre"),
        cargo: prompt("ingrese el cargo"),
        salario: parseFloat(prompt("ingrese el salario")),
    }
    
    document.write("nombre: "+objeto.nombre+ "<br/> cargo: "+objeto.cargo + "<br/>"+objeto.salario)
}