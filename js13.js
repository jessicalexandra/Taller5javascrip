let arreglo =["tomate","banano","manzana","pera","cebolla","papa","fresas","Ajo","Sandia"];

let frutas=["banano","manzana","pera","fresas","Sandia"];
let vegetales=["tomate","cebolla","papa","Ajo"];
document.write(" Frutas  ");
for(let i in arreglo){
    for(let fruta of frutas) {
        if (arreglo[i]===fruta) {
            document.write(i+", ")
        }
    }
}
document.write("<br/> Vegetales  ");
for(let i in arreglo){
    for(let vegetal of vegetales) {
        if (arreglo[i]===vegetal) {
            document.write(i+", ")
        }
    }
}