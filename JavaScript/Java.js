var InfoPaciente = document.querySelectorAll(".paciente");
console.log(InfoPaciente);

var i;

for ( i = 0; i < InfoPaciente.length ; i++){
    var tdpeso = InfoPaciente[i].querySelector(".info-peso");
    var peso = tdpeso.textContent;
    console.log(peso)

    var tdaltura = InfoPaciente[i].querySelector(".info-altura");
    var altura = tdaltura.textContent;
    console.log(altura)

    
        var conta = peso /(altura*altura);
        console.log(conta)
         InfoPaciente[i].querySelector(".info-imc").textContent = conta;
        console.log(conta)

}