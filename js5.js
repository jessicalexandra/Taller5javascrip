let tabla="<table border= '1'>";
tabla+="<tr>"
tabla+="<th>nombre</th>"
tabla+="<th>presentacion</th>"
tabla+="<th>precio</th>"
 tabla+="</tr>"
for (let i = 0; i < 3; i++) {
    var objeto={
        nombre:prompt("ingrese el nombre del producto "),
        presentación: prompt("ingrese la presentacion"),
        valor:parseFloat(prompt("ingrese el precio del producto"))
    }   
    tabla+="<tr>"
    tabla+="<td>"+ objeto.nombre+"</td>"
    tabla+="<td>"+ objeto.presentación+"</td>"
    tabla+="<td>"+ objeto.valor+"</td>"

    tabla+="</tr>"
    
}
tabla+="</table>";
 document.write(tabla)

