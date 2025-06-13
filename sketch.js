let questoes = [
  {
    pergunta: " Qual o principal fator climático que produção de laranjas?",
    opcoes: ["a) Intensos períodos de chuva", "b) Temperaturas extremamente baixas", "c) Temperatura amena e insolação adequada", "d) Vento forte e constante"],
    correta: 2
  },
  {
    pergunta: "Qual fator climático é mais crítico para o cultivo de maçãs?",
    opcoes: ["a) Temperaturas extremamente altas durante o verão."
           , "b) Alta umidade constante durante todo o ano.",
             "c) Períodos de frio intenso no inverno dormência",
             "d) Chuvas abundantes durante a floração."],
    correta: 2
  },
  {
    pergunta: "Qual a fase mais importante para a qualidade do grão de café?",
    opcoes: ["a) Colheita", 
             "b) Secagem", 
             "c) Beneficiamento", 
             "d) Plantio"],
    correta: 0
  },
  {
    pergunta: " Qual o tipo de clima mais adequado para o cultivo do arroz?",
    opcoes: ["a) Clima árido e seco", 
             "b) Clima temperado com quatro estações bem definidas", 
             "c) Clima tropical úmido com alta pluviosidade", 
             "d) Clima subtropical com invernos rigorosos"],
    correta: 1
  },
  {
    pergunta: "Qual o tipo de clima mais adequado para o cultivo do algodão?",
    opcoes: ["Qual o tipo de clima mais adequado para o cultivo do algodão?",
             "b) Clima temperado com quatro estações bem definidas", 
             "c) Clima tropical com temperaturas elevadas e períodos secos", 
             "d) Clima subtropical com invernos rigorosos"],
    correta: 2
  },
  {
    pergunta: " Qual o tipo de clima mais adequado para o cultivo da soja?",
    opcoes: ["a) Clima frio e úmido", 
             "b) Clima temperado com quatro estações bem definidas", 
             "c) Clima tropical com temperaturas elevadas e períodos secos", 
             "d) Clima subtropical com temperaturas amenas"],
    correta: 2
  },
  {
    pergunta: "Qual o principal componente sólido do leite?",
    opcoes: ["a) Lactose", 
             "b) Gordura", 
             "c) Proteína", 
             "d) Água"],
    correta: 3
  },
  {
    pergunta: "Qual o clima mais adequado para o cultivo do guaraná?",
    opcoes: ["a) Clima árido e seco", 
             "b) Clima temperado com quatro estações bem definidas",
             "c) Clima tropical úmido e quente", 
             "d) Clima subtropical com invernos rigorosos"],
    correta: 2
  },
  {
    pergunta: "Qual o tipo de clima mais adequado para o cultivo do trigo?",
    opcoes: [
      "a) Clima tropical úmido e quente",
      "b) Clima temperado com invernos rigorosos e verões amenos",
      "c) Clima árido e seco",
      "d) Clima subtropical com chuvas abundantes"
    ],
    correta: 2
  },
  {
    pergunta: "Qual o tipo de clima mais adequado para o cultivo do milho?",
    opcoes: ["a) Clima frio e úmido", 
             "b) Clima temperado com quatro estações bem definidas",
             "c) Clima tropical com temperaturas elevadas e períodos de seca", 
             "d) Clima subtropical com chuvas abundantes e bem distribuídas"],
    correta: 1
  }
];

let questaoAtual = 0;
let pontuacao = 0;
let resultado = "";
let quizFinalizado = false;

function setup() {
  createCanvas(700, 500);
  textSize(20);
}

function draw() {
  background(230);
  fill(0);

  if (quizFinalizado) {
    text("🎉 Quiz Finalizado!", 50, 50);
    text("Pontuação: " + pontuacao + " de " + questoes.length, 50, 100);
    text("Obrigado por participar!", 50, 150);
   
    textSize(16);
    fill(50);
    text("Fontes utilizadas como apoio:", 50, 220);
    text("- ChatGPT (Inteligência Artificial)", 50, 250);

    text("- Enciclopédia Humanidades (enciclopediahumanidades.org)", 50, 310);
    return;
  }

  let q = questoes[questaoAtual];
  text("Pergunta " + (questaoAtual + 1) + ": " + q.pergunta, 50, 50);

  for (let i = 0; i < q.opcoes.length; i++) {
    fill(200);
    rect(50, 100 + i * 60, 600, 50, 10);
    fill(0);
    text(q.opcoes[i], 60, 130 + i * 60);
  }

  fill(0);
  text(resultado, 50, 450);
}

function mousePressed() {
  if (quizFinalizado) return;

  let q = questoes[questaoAtual];
  for (let i = 0; i < q.opcoes.length; i++) {
    let x = 50;
    let y = 100 + i * 60;
    let w = 600;
    let h = 50;
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
      if (i === q.correta) {
        pontuacao++;
        resultado = "✅ Correto!";
      } else {
        resultado = "❌ Errado. Resposta correta: " + q.opcoes[q.correta];
      }

      setTimeout(() => {
        resultado = "";
        questaoAtual++;
        if (questaoAtual >= questoes.length) {
          quizFinalizado = true;
        }
      }, 1000);
    }
  }
}