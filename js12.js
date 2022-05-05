let arreglos= [3,5,9,10,35,42,12,22,25];

let auxpar=" ";
let conpar=0;
let auximpar=" ";
let conimpar=0;
for(let arreglo of arreglos){
    if (arreglo%2==0) {
        conpar++;
        auxpar+=", "+arreglo;

    }
    else{
        conimpar++;
        auximpar+=", "+arreglo;
    }
}
document.write(`los numeros pares del vector ${auxpar} y la cantidad fueron ${conpar} <br/>`)
document.write(`los numeros impares del vector ${auximpar} y la cantidad fueron ${conimpar} <br/>`)