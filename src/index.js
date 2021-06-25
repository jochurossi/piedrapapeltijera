const piedra = document.getElementById("btn-piedra");
const papel = document.getElementById("btn-papel");
const tijera = document.getElementById("btn-tijera");

const respuestaPlayer = document.getElementById("respuesta");
const respuestaCompu = document.getElementById("respuestaCompu");

const resultadoJugador = document.getElementById("resultadoJugador");
const resultadoCompu = document.getElementById("resultadoCompu");

var jugador = 0;
var compu = 0;

function juegaCompu(respuestaPlayer) {
  const opcionesCompu = ["Piedra", "Papel", "Tijera"];
  var numEleccionCompu = Math.floor(Math.random() * (2 + 1));
  var eleccionCompu = opcionesCompu[numEleccionCompu];

  respuestaCompu.innerHTML = eleccionCompu;

  if (eleccionCompu === "Tijera" && respuestaPlayer === "Piedra") {
    jugador++;
  } else if (eleccionCompu === "Papel" && respuestaPlayer === "Piedra") {
    compu++;
  } else if (eleccionCompu === "Tijera" && respuestaPlayer === "Papel") {
    compu++;
  } else if (eleccionCompu === "Piedra" && respuestaPlayer === "Papel") {
    jugador++;
  } else if (eleccionCompu === "Piedra" && respuestaPlayer === "Tijera") {
    compu++;
  } else if (eleccionCompu === "Papel" && respuestaPlayer === "Tijera") {
    jugador++;
  }

  resultadoJugador.innerHTML = jugador;
  resultadoCompu.innerHTML = compu;
}

function clickPiedra() {
  var respuesta = "Piedra";
  respuestaPlayer.innerHTML = respuesta;
  juegaCompu(respuesta);
}

function clickPapel() {
  var respuesta = "Papel";
  respuestaPlayer.innerHTML = respuesta;
  juegaCompu(respuesta);
}

function clickTijera() {
  var respuesta = "Tijera";
  respuestaPlayer.innerHTML = respuesta;
  juegaCompu(respuesta);
}
//console.log(jugador);
//console.log(compu);

piedra.addEventListener("click", clickPiedra, false);
papel.addEventListener("click", clickPapel, false);
tijera.addEventListener("click", clickTijera, false);
