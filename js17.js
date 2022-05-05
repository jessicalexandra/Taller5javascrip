var array1 = [3,5,9,10,35,42,12,22,25];
var array2 = [9,5,33,12,7,20,22,3,8] ;

suma=0;
suma2=0;
total=0;
 
for (var i=0; i<array1.length; i++) {
 var array3=(array1[i]+array2[i]);
 suma+=array1[i];
 suma2+=array2[i];

 


 document.write("<p>"+array1[i]+"+" +array2[i]+ " : " + array3+"</p>");

}
total=suma+suma2;
document.write("<p>"+suma+"+" +suma2+ " : " + total+"</p>");




