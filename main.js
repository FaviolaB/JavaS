//const Leer = require('prompt-sync')()
class Ejercicio1{
    //1. Dado a=3 y b=7, encuentra el valor de y = 2 * a + b - a mod 3.

    valory(){

        let num1 = 3;
        let num2 = 7;
        let y = 2 * num1 + num2 - num1 % 3;

        console.log("el valor de Y es: " , y );
        document.getElementById("resp").innerHTML = `el  valor de  y  es ${y}`
    }
//-------------------------------------------------------------------------------------------
//Si a=10 y b=4, calcula el valor de z = a * b + 3 mod a + b
 valorZ(){

    let a = 10;
    let b = 4 ;
    let z = a * b + 3 % a + b;

    console.log("el valor que toma Z es:", z);
    document.getElementById("resp").innerHTML =  `el  valor de  Z  es ${z}`



 }
//-------------------------------------------------------------------------------------------
//Con a=6 y b=2, determina el valor de w = a - b + 2 * a mod b.
valorw(){
    let a = 10;
    let b = 2; 
    let w = a - b + 2 * a % b;

    console.log("el valor de W es:",w);
    document.getElementById("resp").innerHTML = `el  valor de  W  es ${w}`
}
    
//-------------------------------------------------------------------------------------------

//Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a.
valorv(){
    let a = 8;
    let b = 5; 
    let v  = 2 * b + a / 2 + 4 * b % a

    console.log("el valor de V es:", v );
    document.getElementById("resp").innerHTML = `el  valor de  V  es ${v}`




}
 //------------------------------------------------------------------------------------------- 
 //Si a=12 y b=9, calcula el valor de u = b - a + 3 * a mod b.
 valoru(){
    let a = 12;
    let b = 9 
    let u = b - a + 3 * a % b
    
    console.log("el valormde U es:", u )
   document.getElementById("resp").innerHTML = `el  valor de  U  es ${u}`
 }
 //------------------------------------------------------------------------------------------- 

 //6. (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3

 mayorQUE(){

    let a = (5 + 3 * 2) + 9;
    let b =  3 * 5 * 14 % 3;

    if(a > b){
        console.log("(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3 es VERDAREDO")
        document.getElementById("resp").innerHTML = `${a} si es mayor de ${b}`
    }else{
        document.getElementById("resp").innerHTML = `${a} no es mayor de ${b}`
    }

}
 //------------------------------------------------------------------------------------------- 
 //7.   2 *(4 – 10 + 8)/2* 36 *(1/2
 valorfinal(){
    let f = 2 *(4 - 10 + 8)/2* 36 *(1/2)

    console.log("2 *(4 - 10 + 8)/2* 36 *(1/2) = ", f )
    document.getElementById("resp").innerHTML = `El resultado de la expresion es: ${f}`
 }
 //-----------------------------------------------------------------------------------------

 //8.   760 / 12 + 54 % 3 – 85 % 7
 valorfinal2(){
let sepsi = 760 / 12 + 54 % 3 - 85 % 7
  console.log("760 / 12 + 54 % 3 - 85 % 7  = ", sepsi)
  document.getElementById("resp").innerHTML = `El resultado de la expresion es: ${sepsi}`
 }
 //-------------------------------------------------------------------------------------------
 //9.    (48 < 2 * 3) | | (48 < 2 * 3)
 mayorquex2(){
    let a =  48 < 2 * 3;
    let b =  48 < 2 * 3;
    
    if (a || b ){
        console.log("(48 < 2 * 3) | | (2 * 7 < 12) es verdadera");
        document.getElementById("resp").innerHTML = `la expresion A y la expresion B son verdaderas `;
    }else{
        console.log("(48 < 2 * 3) | | (2 * 7 < 12) es falso");
        document.getElementById("resp").innerHTML = `la expresion A y la expresion B son falsas `;
   }
 }
  //------------------------------------------------------------------------------------------- 
  //10.        ((8 > 2) | | (932 < 23) ) && 4 == 2
  maryorqueraro(){
    let a = 8 > 2
    let b = 932 < 23
    let c = 4 == 2

    if (a || b || c ){
        console.log("((8 > 2) | | (932 < 23) ) && 4 == 2 es verdadera");
        document.getElementById("resp").innerHTML = `las expresiones A = ${a} ,B = ${b} y c ${c} , esto es igual a VERDADERO `
    }else{
        console.log("((8 > 2) | | (932 < 23) ) && 4 == 2 es falsa");
        document.getElementById("resp").innerHTML = `las expresiones A = ${a} ,B = ${b} y c = ${c} esto es igual a FALSO `
    }
  }
//------------------------------------------------------------------------------------------- 

    //11.    Suma de dos números: Escribe un programa que tome dos números como 
    //entrada y muestre su suma.

    suma(){
        let numero1 = 0 ;
        let numero2 = 0 ;

        numero1 = parseInt(document.getElementById("numero1").value);
        numero2 = parseInt(document.getElementById("numero2").value);

        let resul = numero1 + numero2 ;

        console.log(resul);
        document.getElementById("resp").innerHTML = `respuesta : ${resul}`;


    }
//------------------------------------------------------------------------------------------- 
//12.   Área de un triángulo: Pide al usuario que ingrese la base y la altura de un triángulo, 
//      luego calcula y muestra su área

triangulo(){
    let base = 0
    let altura = 0 
    

    base = parseInt(document.getElementById("base").value);
    altura = parseInt(document.getElementById("altura").value);

    let area = base * altura / 2
    console.log(area);
    document.getElementById("resp").innerHTML = `respuesta : ${area}`;


}
//------------------------------------------------------------------------------------------- 
//13.   Número par o impar: Solicita al usuario que ingrese un número e indica si es 
//  par o impar.

parimpar(){

    let numsepsi = 0 

    numsepsi = parseInt(document.getElementById("numsepsi").value);

    if(numsepsi % 2 == 0 ){
        console.log(numsepsi,"el es un numero par")
        document.getElementById("resp").innerHTML = `${numsepsi} , es un numero par`;
    }else{
        console.log(numsepsi,"el es un numero impar")
        document.getElementById("resp").innerHTML = `${numsepsi} , es un numero impar`;
    }
}
//------------------------------------------------------------------------------------------- 

//14.  Calculadora simple: Crea una calculadora que realice operaciones básicas 
   //como suma, resta, multiplicación y división, según la elección del usuario.
   calculadora(){
    let num1 = 0 
    let num2 = 0
    let operador = ""

    num1 = parseInt(document.getElementById("num1").value);
    operador = document.getElementById("operador").value; 
    num2 = parseInt(document.getElementById("num2").value);
    

    if(operador === "+"){
        let respu = num1 + num2
        console.log(num1 , "+" , num2 , "=" , respu);
        document.getElementById("resp").innerHTML = `resultado = ${respu} `;

    }else if (operador === "-"){
        let respu = num1 - num2
        console.log(num1 , "-" , num2 , "=" , respu);
        document.getElementById("resp").innerHTML = `resultado = ${respu} `;

    }else if (operador === "*"){
        let respu = num1 * num2
        console.log(num1 , "*" , num2 , "=" , respu);
        document.getElementById("resp").innerHTML = `resultado = ${respu} `;

    }else if (operador === "/"){
        let respu = num1 / num2
        console.log(num1 , "/" , num2 , "=" , respu);
        document.getElementById("resp").innerHTML = `resultado = ${respu} `;
    }else{
        console.log("ERROR EN OPERACION");
        document.getElementById("resp").innerHTML = `Ingrese el operados correcto`;

    }
}
//------------------------------------------------------------------------------------------- 
//Tabla de multiplicar: Pide al usuario un número y muestra su tabla de 
//multiplicar del 1 al 10.

tablaMultiplicar(){
    let vi, vf, tabla, resp, contador;
    vi = 0; vf = 0; tabla = 0; resp = 0;

    vi = parseInt(document.getElementById("desde").value)
    vf = parseInt(document.getElementById("hasta").value)
    tabla = parseInt(document.getElementById("tabla").value)

    if (vi < 1 || vi > 10 || vf < 2 || vf > 10 || tabla < 1 || tabla > 100) {
        console.log("Valores fuera del rango permitido.");
        document.getElementById("resp").innerHTML = "Valores fuera del rango permitido.";
        return;
    }




    contador = vi;
    document.getElementById("resp").innerHTML=`Tabla del ${tabla}`
    while (contador <= vf) {
        resp = contador * tabla;
        console.log(`${contador} * ${tabla} = ${resp}`)
        document.getElementById("resp").innerHTML += `<br>${contador} * ${tabla} = ${resp} `
        contador= contador+1
        
    }
}
 //------------------------------------------------------------------------------------------- 
 
 //16. Copiar palabra: Escribe un programa que lea dos palabras y concatena en otra 
 //variable las dos palabras
 palabra(){

    let palabra1 = ""
    let palabra2 = ""

    palabra1 = (document.getElementById("palabra1").value)
    palabra2 = (document.getElementById("palabra2").value)

    let conca = palabra1 + palabra2

    console.log("la union de las palabras es:",conca)
    document.getElementById("resp").innerHTML = `${conca} `
 }
  //------------------------------------------------------------------------------------------- 
//JUAN
//JUAN
//JUAN
//JUAN//JUAN
//JUAN
//JUAN
//JUAN
//JUAN
//JUAN
//JUAN



//------------------------------------------------------------------------------------------- 
//CICLOS O BUCLES

//41. Suma de números pares: Utiliza un bucle for para calcular la suma de los 
//números pares del 1 al 50

serie1al50(){

    let suma = 0 

    for(let i = 0 ; i <= 50 ; i++){
        console.log(i)

       if(i % 2 === 0 ){
         suma += i;
        
        document.getElementById("resp").innerHTML = `las suma de los numeros par es ${suma}`;
       }
    }
}
//------------------------------------------------------------------------------------------- 
//Tabla de multiplicar: Utiliza un bucle for para imprimir la tabla de multiplicar de 
 //un número ingresado por el usuario del 1 al 12
 tablaxd(){
    let num1 = 0;

    num1 = parseInt(document.getElementById("num1").value);

    document.getElementById("resp").innerHTML = ""

    for(let i = 1; i<=12;i++){
        let respu = i * num1;

        document.getElementById("resp").innerHTML += `<br>${num1} * ${i} = ${respu}`;

    }
 }
//------------------------------------------------------------------------------------------- 
//43. Contador de vocales: Utiliza un bucle while para contar el número de vocales en una 
//palabra ingresada por el usuario.
vocales(){

    let vocal = "aeiouAEIOU";
    let conta = 0 ;
    let frase = "";
    let i = 0;
    

    frase = (document.getElementById("frase").value);

    while (i < frase.length){
        if(vocal.indexOf(frase[i]) !== -1){
            console.log("vocales", frase[i]);
            conta += 1;
           
        }  
        i++;
    }
    document.getElementById("resp").innerHTML = `cantidad de vocales:${conta} `;
}

//------------------------------------------------------------------------------------------- 
//44. Contador de digitos: Utiliza un bucle for para contar el numero de dígitos en 
//una palabra ingresada por el usuario.
digitos(){
    let contador = 0

    let frase = ""

    frase = (document.getElementById("frase").value)

    for(let i = 0; i < frase.length; i++){
        let carac = frase.charAt(i);
        if (!isNaN(carac) && carac !== " "){
            contador += 1;
            
        }
    }
    document.getElementById("resp").innerHTML = `la palabra la frase tiene ${contador}`
}
//------------------------------------------------------------------------------------------- 


//45. Adivina el número: Genera un número aleatorio y pide al usuario que adivine el 
//número. Utiliza un bucle while para repetir la solicitud hasta que adivine 
//correctamente.

  
juegosepsi() {
    
    let intentos = 10;
    let num = "";
    let mensajes = "";
    let numeroR = Math.floor(Math.random() * 10 + 1);

 
  
    while (num !== numeroR) {
      num = parseInt(document.getElementById("num").value);
      console.log (numeroR)
  
      if (num === numeroR) {
        mensajes += `Número encontrado ${num} con ${intentos} intentos de sobra`;
        break;
      } else if (num > numeroR) {
        mensajes += "El número es muy alto, ingresa otro <br>";
      } else if (num < numeroR) {
        mensajes += "El número es muy bajo, ingresa otro <br>";
      }
      intentos--;
    }
  
    if (intentos === 0) {
      alert("PERDISTE 😓 reinicia el juego");
    }
  
    document.getElementById("resp").innerHTML += `<br> ${mensajes}`;
  }
  //------------------------------------------------------------------------------------------- 
  //46. Contador de Alfabeto: Utiliza un bucle for para contar el número de letras del 
 ///alfabeto(a..z) en una palabra ingresada por el usuario.

  alfaaz(){

    let contador = 0 
    let palabra = " "

    palabra = (document.getElementById("palabra").value)
    console.log (palabra)

    for ( let i = 0; i < palabra.length; i ++){
        let caract = palabra.charAt(i);
        if (caract >= 'a' && caract <= 'z'){
            contador ++;

        }

        }
        document.getElementById("resp").innerHTML = `${palabra} tiene ${contador} letras`;
    }
    //------------------------------------------------------------------------------------------- 
    // 47. Suma de números impares: Utiliza un bucle while para calcular la suma de los 
     //números impares del 1 al 100.

     del1al100(){
        let contador = 0
        let suma = 0 
        let i = 0

        while(i <= 100){
            if (i % 2 !== 0){
                console.log(i)
                suma += i
            }
            document.getElementById("resp").innerHTML =   `${suma}`;
            i++;
        }



     }
//------------------------------------------------------------------------------------------- 
 //Contador de caracteres: Escribir un programa que lea una palabra y presenta 
 //cuantos caracteres hay en dicha palabra.

 numcaracte(){
    let contador = 0
    let palabrota = " " 

    palabrota = (document.getElementById("palabrota").value)
    console.log(palabrota)

    for(let i = 0 ; i < palabrota.length; i++){
        console.log(i + 1)
        document.getElementById("resp").innerHTML = `${palabrota} tiene ${i} caracteres.`;
    }
    
 }
//------------------------------------------------------------------------------------------- 
 //49.     Suma de números: Pide al usuario que ingrese números enteros positivos uno 
//por uno y utiliza un bucle while para calcular la suma de estos números. El ciclo 
//debe terminar cuando el usuario ingrese un número negativo.
sumainfinita(){

    let suma  = 0 
    let num = parseInt(document.getElementById("num").value)
    
    while(num >= 0){
        let num = parseInt(prompt("dame numeros sin parar [ingresa numero negativo para parar]"))
        
        if ( num >= 0){
            suma +=  num;
            console.log(suma)
    
        }else{
            break;
        }
       
    }

    document.getElementById("resp").innerHTML = `suma total${suma}`;

}

//------------------------------------------------------------------------------------------- 
//50. Cuenta regresiva: Pide al usuario que ingrese un número entero positivo y utiliza 
//un bucle while para mostrar una cuenta regresiva desde ese número hasta 1

paraAtras(){

    let num = 0
    let respuu = ""

   

    num = parseInt(document.getElementById("num").value)

    while (num > 0 ){
        respuu += `${num} - `;


        num--;
    }
    document.getElementById("resp").innerHTML = `${respuu}`
  

}
//------------------------------------arreglos------------------------------------------------------- 
//51. Suma de elementos: Crea un arreglo de números enteros y calcula la suma de todos sus 
//elementos.

arreglo1(){
    

    let nums = [25 ,57 ,12 , 42 ,53 ,35,2];
    let suma = 0 
    for ( let i = 0 ; i < nums.length; i++){
        suma += nums[i]
    }
    document.getElementById("resp").innerHTML =`${suma}`


}
//------------------------------------------------------------------------------------------- 
//52. Promedio de calificaciones: Crea un arreglo de calificaciones (números decimales) y 
//calcula el promedio de las calificaciones.

calificaciones() {
    let inputCalificaciones = document.getElementById("notas").value;

    
    if (inputCalificaciones.trim() === "") {
        document.getElementById("resp").innerHTML = "Por favor, ingresa calificaciones.";
        return;
    }

    
    let calificacionesArray = inputCalificaciones.split(',').map(parseFloat);

    // Verificar si alguna calificación no es un número
    if (calificacionesArray.some(isNaN)) {
        document.getElementById("resp").innerHTML = "Por favor, ingresa calificaciones válidas.";
        return;
    }

    // Verificar si hay al menos una calificación
    if (calificacionesArray.length === 0) {
        document.getElementById("resp").innerHTML = "Por favor, ingresa al menos una calificación.";
        return;
    }

    // Calcular el promedio
    let suma = calificacionesArray.reduce((total, calificacion) => total + calificacion, 0);
    let promedio = suma / calificacionesArray.length;

    // Mostrar el resultado
    document.getElementById("resp").innerHTML = `Calificaciones ingresadas: [${calificacionesArray.join(', ')}]<br>El promedio es: ${promedio.toFixed(2)}`;
}

 //------------------------------------------------------------------------------------------- 

 //53. Mayor y menor valor: Encuentra el valor máximo y mínimo en un arreglo de números 
 //enteros.
 mayomenor(){
    let entradadenumeros = document.getElementById("numeros").value;


    if(entradadenumeros.trim() === "" ){
        alert("el campo esta vacio")
        return;
    }

    let numeroarreglo = entradadenumeros.split(',').map(parseFloat);

    if (numeroarreglo.some(isNaN)){
        alert("Ingrese los valores correctos")
        return;
    }

    if(numeroarreglo.length === 0 ){
        alert("ingrese al menos 2 digitos")
        return;
    }

    let maximo = numeroarreglo[0];
    let minimo = numeroarreglo[0];

    for(let i = 1; i <numeroarreglo.length; i++){

    if(numeroarreglo[i] > maximo){
        maximo = numeroarreglo[i];
    }

    if (numeroarreglo[i] < minimo){
        minimo = numeroarreglo[i];
    }

    }

    document.getElementById("resp").innerHTML = `El valor máximo es: ${maximo}, y el valor mínimo es: ${minimo}.`;

 }
   //------------------------------------------------------------------------------------------- 
  //54. Buscar un elemento: Pide al usuario que ingrese un número y verifica si ese número está 
   //presente en un arreglo dado.
   busqueda(){
    let arreglo1 = [29,5,8,2,7,2,6,24]
    let entrada = parseInt(document.getElementById("numeros").value);

    for(let i = 0 ; i < arreglo1.length; i++){
        if(entrada === arreglo1[i]){ 
            document.getElementById("resp").innerHTML = `en numero ${entrada} si esta en el arreglo <br> ${arreglo1}`
            return;
        }
    }
    document.getElementById("resp").innerHTML = `El número ${entrada} no está en el arreglo: [${arreglo1}]`;
    alert("Valores del arreglo: [29, 5, 8, 2, 7, 2, 6, 24]");
   }

     //------------------------------------------------------------------------------------------- 
     //Inversión de un arreglo: Invierte el orden de los elementos en un arreglo. Por ejemplo, 
    //[1, 2, 3] se convierte en [3, 2, 1].
    paraatrasbb(){

        let nuevoarreglo = []

        let entradadenumeros = document.getElementById("numeros").value;


    if(entradadenumeros.trim() === "" ){
        alert("el campo esta vacio")
        return;
    }

    let numeroarreglo = entradadenumeros.split(',').map(parseFloat);

    if (numeroarreglo.some(isNaN)){
        alert("Ingrese los valores correctos, tiene que ser numericos")
        return;
    }

    if(numeroarreglo.length === 0 ){
        alert("ingrese al menos 2 digitos")
        return;
    }

    for(let i = numeroarreglo.length -1; i >= 0; i--){
        nuevoarreglo.push(numeroarreglo[i]);

      

    }
    document.getElementById("resp").innerHTML = `el arreglo al reves es: [${nuevoarreglo}]`;
    

    }
//------------------------------------------------------------------------------------------- 

//57. Buscar el índice: Pide al usuario que ingrese un valor y encuentra el índice de ese valor 
//en un arreglo. Si el valor aparece más de una vez, muestra todos los índices.
indice(){

    let bingo = []
    let indice = [3,5,6,3,7,8,7,12,17,19];
    let numero = parseInt(document.getElementById("numeros").value);


    for(let i = 0; i < indice.length;i++){
        if(numero === indice[i]){
            bingo.push(i);

        
        }
    
    }

    if (bingo.length > 0 ){
        document.getElementById("resp").innerHTML = `el numero ${numero} en las posiciones ${bingo.join(" y ")}`;
    }else{
        alert("numero no encontrado en [3,5,6,3,7,8,7,12,17,19]");
    }

}

//------------------------------------FUNSIONES------------------------------------------------------- 
saludo(){
    function saludar(){
        console.log("hola profe😘");
        return "hola profe😘";
    }

  document.getElementById("resp").innerHTML = saludar();
}

//------------------------------------------------------------------------------------------- 

//59. Función con parámetros para sumar dos números.
function2(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    function suma(num1 , num2){
        let resultado = num1 + num2;
        return resultado;
    }

    document.getElementById("resp").innerHTML = suma(num1 , num2)
}
//------------------------------------------------------------------------------------------- 
//60. Función con return para multiplicar dos números.

function3(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
//pero si es lo mismo que el ejercicio anterior 
    function multiplicaaar(num1 , num2){
        let resultado = num1 * num2;
        return resultado;
    }

    document.getElementById("resp").innerHTML = multiplicaaar(num1 , num2);
}
//------------------------------------------------------------------------------------------- 
//61. Función sin return para determinar si un número es par o impar.

function4(){
    let num = parseInt(document.getElementById("num").value);

    function area(num){
        if (num % 2 === 0){
            return "El número ingresado es par";
        } else {
            return "El número no es par";
        }
    }

    document.getElementById("resp").innerHTML = area(num)
}
//-------------------------------------------------------------------------------------------
//62. Función con parámetros y return para calcular el área de un rectángulo.
function5(){
    let base = parseInt(document.getElementById("base").value);
    let altura = parseInt(document.getElementById("altura").value);
//pero si es lo mismo que el ejercicio anterior 
    function area(base , altura){
        let resultado = base * altura;
        return resultado;
    }

    document.getElementById("resp").innerHTML = area(base , altura);
}

//------------------------------------------------------------------------------------------- 
//63. Función sin parámetros para imprimir tu nombre
saludo23(){
    function saludar23(){
        console.log("✞☠︎ℕ𝕖𝕠𝕟ℙ𝕦𝕟𝕜 𝕋𝕖𝕒𝕞☠︎✞");
        return "✞☠︎ℕ𝕖𝕠𝕟ℙ𝕦𝕟𝕜 𝕋𝕖𝕒𝕞☠︎✞";



    }
    document.getElementById("resp").innerHTML = `nombre del grupo <br> ${saludar23()}`

}
//-------------------------------------------------------------------------------------------
//64. Función con return para convertir grados Celsius a Fahrenheit
calor(){

    let cel = parseInt (document.getElementById("cel").value);
   function conver(cel){
    let fahr = (cel * (9 / 5)) + 32
    return fahr;

   }
   document.getElementById("resp").innerHTML =`${cel} grados Celsius a Fahrenheit : ${conver(cel)} `

}
//------------------------------------------------------------------------------------------- 
//65. Función con parámetros para contar un carácter en una frase.
fraseee(){
    let frase = document.getElementById("frase").value
    let conta = 0
    let carac = document.getElementById("carac").value

    function contardorpro (frase , carac){
        for ( let i = 0; i < frase.length;i++){
            if(frase[i]== carac ){
                conta++
            }
        }
        return conta;

    }
    let respuesta  = contardorpro (frase , carac)
    document.getElementById("resp").innerHTML = `🌻caracter: ${carac} <br> 🌻veces encontrado: ${respuesta } `

}
//------------------------------------------------------------------------------------------- 
//66. Función sin return para imprimir números del 1 al 10.
seriepro(){
    
    function secuencia(){
        let respu = ""
        for (let i = 1 ; i < 11;i++){
            console.log(i);
            respu += i +  " ";
            
        }return respu;
       
       



    }
    document.getElementById("resp").innerHTML = `serie del 1 al 10 <br> ${secuencia()}`

}
//------------------------------------------------------------------------------------------- 
//7. Función con parámetros y return para sumar una lista de números.














  //------------------------------------------------------------------------------------------- 
    multiplo(){
        let num = 0, mul = 0, r = 0

        num = parseInt(document.getElementById("num").value)
        mul = parseInt(document.getElementById("multi").value)
    
        r = num % mul
        if (r == 0) {
            console.log(num,"es multiplo de ",mul)
            document.getElementById("resp").innerHTML = `${num} es divisible para ${mul}`
        }
        else {
            document.getElementById("resp").innerHTML = `${num} no es divisible para ${mul}`
        } 
    }
}
    //-------------------------------------------------------------------------------------------




let ope = new Ejercicio1();
//ope.valory()
//ope.valorZ()
//ope.valorw()
//ope.valorv()
//ope.valoru()
//ope.mayorQUE()
//ope.valorfinal()
//ope.valorfinal2()
//ope.mayorquex2()
//ope.maryorqueraro()
//ope.suma()
//ope.triangulo()
//ope.parimpar()
//ope.calculadora()
//ope.tablaMultiplicar()
//ope.palabra()
//ope.serie1al50()
//ope.tablaxd()
//ope.vocales()
//ope.digitos()
//ope.juegosepsi()
//ope.alfaaz()
//ope.del1al100()
//ope.numcaracte()
//ope.sumainfinita()
//ope.paraAtras()
//ope.arreglo1()
//ope.calificaciones()
//ope.mayomenor()
//ope.busqueda()
//ope.paraatrasbb()
//ope.indice()
//ope.saludo()
//ope.function2()
//ope.function3()
//ope.function4()
//ope.function5()
//ope.saludo23()
//ope.calor()
//ope.fraseee()
//ope.seriepro()






