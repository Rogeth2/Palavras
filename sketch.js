let palavra;
 

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
  
}

function palavraAleatoria(){
  let palavras = ["Dever", "Atenção", "Responsabilidade"]
  return random(palavras);
}

function estruturaCores() {
  background("pink");
  fill("black");
  textSize(50);
  textAlign(CENTER, CENTER);
} 

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  estruturaCores();
  let construçao = palavraParcial(0, width);
  text(construçao, 200, 200);
  
}

function modoNoturno(horario) {
  if (horario > 18) {
    console.log("Você precisa ligar o modo escuro!");
  } else {
    console.log("Modo noturno não é necessário neste momento.");
  }
}

modoNoturno(15);
modoNoturno(20);

