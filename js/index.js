function MonteCarlo(x) {
  for (let i = 0; i < x; i++) {
    //Numero Aleatorio entre 2.7 y 3.1
    let limSuperior = (Math.random() * (3.1 - 2.7) + 2.7);
    //Numero aleatorio entre 1.7 y 2.1
    let limInferior = (Math.random() * (2.1 - 1.7 )) + 1.7 ;

    if (limSuperior < limInferior) {
      let superior = limInferior;
      let inferior = limSuperior;
      Integral(superior, inferior, x);
    } else {
      Integral(limSuperior, limInferior, x);
    }
  }
}

var valorMonteCarlo = 0;
function Integral(superior, inferior, simulacion) {
  let integral =
    superior ** 3 + superior ** 2 - (inferior ** 3 + inferior ** 2);
  console.log(integral);
  valorMonteCarlo += integral;
}

function IntegralReal(superior, inferior){
  let integral = superior **3 + superior**2 - (inferior**3 + inferior**2);
  document.getElementById("valorreal").innerText = integral.toFixed(3);
}

function Diferencia(){
  let real = parseInt(document.getElementById("valorreal").innerText);
  let montecarlo = parseInt(document.getElementById("montecarlo").innerText);
  diferencia = (((real-montecarlo)/real)*100).toFixed(2);
  document.getElementById("error").innerText = diferencia + "%"
}

function Simular() {
  var simulacion = parseInt(document.getElementById("id_simulations").value);
  IntegralReal(3,2);
  MonteCarlo(simulacion);
  let montecarlo = document.getElementById("montecarlo");
  montecarlo.innerText = (valorMonteCarlo/simulacion).toFixed(3);
  let simulaciones = document.getElementById("simulaciones");
  simulaciones.innerText = simulacion;
  Diferencia()
}

