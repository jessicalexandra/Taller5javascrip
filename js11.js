let arreglo= [3,5,9,10,35,42,12,22,25].every

document.write("primera posicion: "+arreglo[0]);
document.write("<br/>ultima posicion: "+arreglo[arreglo.length-1]);

 var centro=Math.floor(arreglo.length/2);

document.write("<br/>posicion del centro: "+arreglo[centro]+"<br/>");
document.write("El vector es ");
arreglo.forEach(element => {
    document.write(element+", ");
});