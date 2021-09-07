
   var EtapaAtual = 0;
   var Acertos = 0;

   //Perguntas
   var perguntas = [
    {
        questao: "1) Quanto é 3+7 ?",
        a: "A) 10",
        b: "B) 11",
        c: "C) 20",
        d: "D) 31",
        resposta: "a"
      },
    {
        questao: "2) Quanto é 10x10 ?",
        a: "A) 156",
        b: "B) 134",
        c: "C) 200",
        d: "D) 100",
        resposta: "d"
      },
    {
        questao: "3) Quanto é 24/2 ?",
        a: "A) 12",
        b: "B) 4",
        c: "C) 10",
        d: "D) 6",
        resposta: "a"
      },
      {
        questao: "4) Quanto é 1000-1 ?",
        a: "A) 666",
        b: "B) 333",
        c: "C) 999",
        d: "D) 1001",
        resposta: "c"
      },
      {
        questao: "5) Qual é o herói que é uma aranha ?",
        a: "A) Homem de Lata",
        b: "B) Homem Escalante",
        c: "C) Homem de Ferro",
        d: "D) Homem Aranha",
        resposta: "d"
      },
      {
        questao: "6) HTML é linguagem de programação ?",
        a: "A) Melhor que PHP",
        b: "B) Concordo Linda!",
        c: "C) Sim",
        d: "D) Não",
        resposta: "d"
      },
      {
        questao: "7) Quanto é 30 + 66 ?",
        a: "A) 96",
        b: "B) 77",
        c: "C) 22",
        d: "D) 53",
        resposta: "a"
      },
      {
        questao: "8) Qual é o Dia da independência do Brasil ?",
        a: "A) 11 de Setembro",
        b: "B) 30 de Outubro",
        c: "C) 7 de Setembro",
        d: "D) 30 de Fevereiro",
        resposta: "c"
      },
      {
        questao: "9) O Que significa a sigla EUA ?",
        a: "A) Eu Uivo Amanhã",
        b: "B) Estados Unidos da América",
        c: "C) Eu Uso Alcool",
        d: "D) Élio Ungido Amestista",
        resposta: "b"
      },
      {
        questao: "10) Qual nome é dado para pessoas que gostam de dor ?",
        a: "A) Dorflex",
        b: "B) Sadomaiconkuster",
        c: "C) Sadomalaquista",
        d: "D) Sadomasoquista",
        resposta: "d"
      },
];

$(document).ready(function() {
    $(".perguntas").hide();
    $(".LastCard").hide();
    $(".congratulations").hide();
    $(".error").hide();
});

$(".start").click(function(){
  $(".inicioStart").hide();
  $(".perguntas").show();
  StartQuiz();
})

function StartQuiz(){

EtapaAtual = 0;
Acertos = 0;
  $(".tituloPergunta").html(perguntas[EtapaAtual]["questao"])
  var resposta = perguntas[EtapaAtual].resposta;

  switch (resposta) {
    case "a":
      $(".a").html(`<button onclick="VerificaRespostaProximaQuestao(true)" class="btn btn-secoundary">${perguntas[EtapaAtual].a}</button>`);
      $(".b").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].b}</button>`);
      $(".c").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].c}</button>`);
      $(".d").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].d}</button>`);
    break;
      case "b":
      $(".a").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].a}</button>`);
      $(".b").html(`<button onclick="VerificaRespostaProximaQuestao(true)" class="btn btn-secoundary">${perguntas[EtapaAtual].b}</button>`);
      $(".c").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].c}</button>`);
      $(".d").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].d}</button>`);
      break;
    case "c":
      $(".a").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].a}</button>`);
      $(".b").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].b}</button>`);
      $(".c").html(`<button onclick="VerificaRespostaProximaQuestao(true)" class="btn btn-secoundary">${perguntas[EtapaAtual].c}</button>`);
      $(".d").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].d}</button>`);
      break;
    case "d":
      $(".a").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].a}</button>`);
      $(".b").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].b}</button>`);
      $(".c").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].c}</button>`);
      $(".d").html(`<button onclick="VerificaRespostaProximaQuestao(true)" class="btn btn-secoundary">${perguntas[EtapaAtual].d}</button>`);
      break;
    default:            
  }

}

function VerificaRespostaProximaQuestao(acertou){
  if((EtapaAtual + 1 ) == perguntas.length){

    EtapaAtual = EtapaAtual + 1;

    if(acertou == true){
      Acertos = Acertos + 1;
    }

    $(".perguntas").hide();

    if(Acertos > 7){
      $(".FinalQuiz").html(`Parabéns você passou de ano <br>  <br> <h1>${Acertos}/10</h1>`)
      $(".recomecar").hide();
      $(".congratulations").show();
    }else{
      $(".FinalQuiz").html(`Ops! você reprovou de ano <br> <br> <h1>${Acertos}/10</h1>`)
      $(".error").show();
    }

    $(".LastCard").show();
    
  }else{

    EtapaAtual = EtapaAtual + 1;
    
    $(".tituloPergunta").html(perguntas[EtapaAtual]["questao"])
    var resposta = perguntas[EtapaAtual].resposta;

    switch (resposta) {
      case 'a':
        $(".a").html(`<button onclick="VerificaRespostaProximaQuestao(true)" class="btn btn-secoundary">${perguntas[EtapaAtual].a}</button>`);
        $(".b").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].b}</button>`);
        $(".c").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].c}</button>`);
        $(".d").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].d}</button>`);
        break;
        case 'b':
        $(".a").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].a}</button>`);
        $(".b").html(`<button onclick="VerificaRespostaProximaQuestao(true)" class="btn btn-secoundary">${perguntas[EtapaAtual].b}</button>`);
        $(".c").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].c}</button>`);
        $(".d").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].d}</button>`);
        break;
      case 'c':
        $(".a").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].a}</button>`);
        $(".b").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].b}</button>`);
        $(".c").html(`<button onclick="VerificaRespostaProximaQuestao(true)" class="btn btn-secoundary">${perguntas[EtapaAtual].c}</button>`);
        $(".d").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].d}</button>`);
        break;
      case 'd':
        $(".a").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].a}</button>`);
        $(".b").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].b}</button>`);
        $(".c").html(`<button onclick="VerificaRespostaProximaQuestao(false)" class="btn btn-secoundary">${perguntas[EtapaAtual].c}</button>`);
        $(".d").html(`<button onclick="VerificaRespostaProximaQuestao(true)" class="btn btn-secoundary">${perguntas[EtapaAtual].d}</button>`);
        break;
      default:            
    }

    if(acertou == true){
      Acertos = Acertos + 1;
    }

  }
}