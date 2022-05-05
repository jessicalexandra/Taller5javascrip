let frutas=["Mango","Manzana","Kiwi"];

frutas.push(prompt("ingrese la 1ra fruta ")||"No ingresaste la fruta");
frutas.push(prompt("ingrese la 2da fruta ")||"No ingresaste la fruta");
for (let fruta of frutas) {
   
    document.write(fruta+"<br/>");
}