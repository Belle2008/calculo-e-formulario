// soma os valores
const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click", () => {
    let numero1 = document.getElementById("valor1").value;
    let numero2 = document.getElementById("valor2").value;
    let soma = parseInt (numero1) + parseInt(numero2);
    document.getElementById("resultado").innerHTML =  "O resultado é " + soma;
});
const btnSubtração = document.getElementById("subtrair");
btnSubtração.addEventListener("click", () => {
    let numero1 = document.getElementById("valor1").value;
    let numero2 = document.getElementById("valor2").value;
    let subtração = parseInt (numero1) - parseInt(numero2);
    document.getElementById("resultado").innerHTML =  "O resultado é " + subtração;
}); 
const btnmultiplicação = document.getElementById("multiplicar");
btnmultiplicação.addEventListener("click", () => {
    let numero1 = document.getElementById("valor1").value;
    let numero2 = document.getElementById("valor2").value;
    let multiplicação = parseInt (numero1) * parseInt(numero2);
    document.getElementById("resultado").innerHTML =  "O resultado é " + multiplicação;
}); 
const btndivisão = document.getElementById("dividir");
btndivisão.addEventListener("click", () => {
    let numero1 = document.getElementById("valor1").value;
    let numero2 = document.getElementById("valor2").value;
    let divisão = parseInt (numero1) / parseInt(numero2);
    document.getElementById("resultado").innerHTML =  "O resultado é " + divisão;
}); 

