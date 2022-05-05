var frutas=["mango","pera","mora"];
 frutas.push("naranja");
 document.write("Arreglo con push: "+(frutas));

 var fruta=frutas.slice(1,3);
 
 document.write("<br/>");
 document.write("Arreglo con slice: "+fruta);
 document.write("<br/>");
 frutas.pop();
 document.write("Arreglo con pop: "+frutas);
 document.write("<br/>");
 frutas.splice(0,0,"kiwi");
 document.write("Arreglo con splice: "+frutas);


//  var Deportes=["futbol","baseball","swimming"];
//  var conta=parseInt(prompt("cuantas veces desea ingresar los deportes"));
//  for (let index = 0; index < conta; index++) {
//     Deportes.push(prompt("ingrese un deporte"));
     
//  }

//  document.write("Arreglo con push: "+(Deportes));
//  var opct=confirm("Desea eliminar el ultimo elemento");
//  if (opct) {
//      Deportes.pop();

//  }

// var menu=prompt("ingrese 1: agregar ,2: eliminar");
// if (menu==1) {
//     var dato=prompt("ingrese el deporte");
//     Deportes.splice(0,0,dato)
// }
// else if(menu==2){
//     var datos=parseInt(prompt("ingrese el deporte que desea eliminar"));
//     Deportes.splice(0,datos)

// }else{
//     alert("opcion no valida")
// }
// document.write("Arreglo con splice: "+(Deportes));



 





