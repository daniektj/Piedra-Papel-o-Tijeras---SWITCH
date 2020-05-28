var usuario = prompt("Selecciona una de las siguientes opciones" + "  1- Piedra   2-Papel   3-Tijeras");
var opciones = ["undefined", "Piedra", "Papel", "Tijeras"];
var maquina = Math.floor((Math.random() * 3) + 1);
var num = maquina.toFixed(0);



switch (usuario == 0 || usuario >= 4) {
    case true:
        document.getElementById("resultado").innerHTML = "No Valido";
        break;
}


switch (opciones[usuario]) {
    case "Piedra":
        document.getElementById("resultado").innerHTML = opciones[usuario] == "Piedra" & opciones[num] == "Tijeras" ? "Ganaste" : "Perdiste";
        resultados();
        break;
    case "Papel":
        document.getElementById("resultado").innerHTML = opciones[usuario] == "Papel" & opciones[num] == "Piedra" ? "Ganaste" : "Perdiste";
        resultados();
        break;
    case "Tijeras":
        document.getElementById("resultado").innerHTML = opciones[usuario] == "Tijeras" & opciones[num] == "Papel" ? "Ganaste" : "Perdiste";
        resultados();
        break;
}


switch (usuario) {
    case num:
        document.getElementById("resultado").innerHTML = "EMPATE";
        resultados()
        break;
}

function resultados() {
    document.getElementById("maquina_resultado").innerHTML = opciones[maquina];
    document.getElementById("usuario_eleccion").innerHTML = opciones[usuario]
}




/*


var i = ["tijera","piedra","papel"];
var resultado = i[Math.floor(Math.random()*(i.length))];
aleatorio = Math.floor(Math.random()*(i.length));
seleccion = i[aleatorio];
console.log(resultado);
console.log(seleccion);
switch (resultado) {
  case resultado:
    switch (seleccion) {
      case resultado:
        console.log("Intenta de nuevo");
        break;
      case"tijera":
        var t = seleccion == "tijera" & resultado == "piedra" ? "Ganaste" : "Perdiste";
        console.log(t);
        break;
      case"papel":
        var t = seleccion == "papel" & resultado == "tijera" ? "Ganaste" : "Perdiste";
        console.log(t);
        break;
      case"piedra":
        var t = seleccion == "piedra" & resultado == "papel" ? "Ganaste" : "Perdiste";
        console.log(t);
        break;
      }
      break;
} */