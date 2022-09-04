$(document).ready(function (){
    $("#nomeb").click(ValidaNome);
    $('#cpfb').click(ValidaCPF);
    $('#data').blur(ValidaData);
    $('#civilb').click(ValidaEstado);
    $("#sexb").click(ValidaSexo);
    $('#decisao').click(ValidaPilula);
    $("#fim").click(ValidaTudo);
    $(document).ready(Morpheus);
})
  
function ValidaNome(){
    if(($("#nome").val().length)<=1){
      $('#nome').attr("class",'erro');
        $("#p1").text("O nome NÃO é válido.");
        return false;
    } else if($("#nome").val().includes("*")||$("#nome").val().includes("/")||$("#nome").val().includes("-")||$("#nome").val().includes("+")||$("#nome").val().includes("?")||$("#nome").val().includes("<")||$("#nome").val().includes(">")||$("#nome").val().includes(".")||$("#nome").val().includes(",")||$("#nome").val().includes(";")||$("#nome").val().includes(":")||$("#nome").val().includes("%")||$("#nome").val().includes("$")||$("#nome").val().includes("#")||$("#nome").val().includes("@")||$("#nome").val().includes("!")||$("#nome").val().includes("=")||$("#nome").val().includes("_")||$("#nome").val().includes(")")){
      $('#nome').attr("class",'erro');
      $("#p1").text("O nome NÃO é válido.");
      return false;
    } else if (($("#nome").val().length) >= 1 && $("#nome").val().includes(" ")){
        $('#nome').removeClass("erro");
        $("#p1").text("O nome é válido.");
        return true;
}
}

function ValidaCPF(){
    var Soma;
  var Resto;
  Soma = 0;

  if ($('#cpf').val() == "00000000000" || $('#cpf').val() == "11111111111" || 
  $('#cpf').val() == "22222222222" || $('#cpf').val() == "33333333333" ||
   $('#cpf').val() == "44444444444" || $('#cpf').val() == "55555555555" ||
    $('#cpf').val() == "66666666666" || $('#cpf').val() == "77777777777" ||
     $('#cpf').val() == "88888888888" || $('#cpf').val() == "99999999999") {
      $('#cpf').attr("class",'erro');
      $('#p2').text("CPF inválido");
      return false;
    } else {
    for (i = 1; i <= 9; i++) Soma = Soma + parseInt($('#cpf').val().substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt($('#cpf').val().substring(9, 10))) {
      $('#cpf').attr("class",'erro');
      $('#p2').text("CPF inválido");
      return false;
    } else {
      Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt($('#cpf').val().substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11)) Resto = 0;
      if (Resto != parseInt($('#cpf').val().substring(10, 11))){
        $('#cpf').attr("class",'erro');
        $('#p2').text("CPF inválido");
        return false;
      } else{
        $("#cpf").mask('999.999.999-99');
        $('#cpf').removeClass("erro");
        $('#p2').text("CPF válido");
        return true;
      }
    }
  }

}
function ValidaEstado(){
  if($('#estado_civil').val() === 'Solteiro'||$('#estado_civil').val() === 'Casado'||$('#estado_civil').val() === 'Separado'||$('#estado_civil').val() === 'Divorciado' ||$('#estado_civil').val() ==='Viuvo'){
    $('#estado_civil').removeClass("erro");
    $("#p4").text("ESTADO CIVIL VALIDADO.")
    return true;
  } else {
    $('#estado_civil').attr("class",'erro');
    $("#p4").text("ESTADO CIVIL INVALIDO.")
    return false;
  }
}

function ValidaSexo(){
  if($("#Masculino").prop("checked")||$("#Feminino").prop("checked")||$("#Indefinido").prop("checked")||$("#Outro").prop("checked")){
    $("#p5").text("SEXO VALIDADO.")
    return true;
  } else{
    $("#p5").text("O SEXO NÃO FOI SELECIONADO.")
    return false;
  }
}

function ValidaData(){
    var data = $("#data").val(); 
    data = data.replace(/\//g, "-"); 
    var data_array = data.split("-"); 
    
 
    if(data_array[0].length != 4){
       data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; 
    }
    
    pessoamaisvelhadomundo = 119;
    var hoje = new Date();
    var nasc  = new Date(data);
    var idade = hoje.getFullYear() - nasc.getFullYear();
    var m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
    
    
    if (nasc > hoje){
      $('#data').attr("class",'erro');
      $("#p3").text("Por acaso pensa que sou tolo? Não informe datas de nascimento que ainda não passaram.");
      return false;
    }else if(idade < 18){
      $('#data').attr("class",'erro');
      $("#p3").text("Pessoas menores de 18 não podem ser testadas.");
      return false;
    } else if(idade >= 18 && idade <= pessoamaisvelhadomundo){
      $('#data').removeClass("erro");
       $('#p3').text("IDADE PERMITIDA.");
       return true;
    }

    return false;
 }

 function ValidaPilula(){
  if ($("#redpill").prop('checked')){
    $("#p6").text("Parabéns, fez a escolha certa.")
    return true;
  } else if($("#bluepill").prop('checked')){
    $("#p6").text("VIVERÁ NÃO DESPERTO ATÉ QUE ELES TE CORROAM.")
    return true;
  } else {
    $("#p6").text("TOME UMA PILULA.")
    return false;
  }
 }


function Morpheus(){
  var haha = Math.floor(Math.random()*10);

  if (haha===0||haha === 1){
    $("#morpheus").text('"Eu só posso lhe mostrar a porta. Você tem que atravessá-la."')
  } else if(haha === 2){
    $("#morpheus").text('"Há uma diferença entre conhecer o caminho e percorrer o caminho."')
  } else if(haha === 3){
    $("#morpheus").text('"Não pense que é, saiba que é."')
  } else if(haha === 4){
    $("#morpheus").text('"Cedo ou tarde, você vai aprender, assim como eu aprendi, que existe uma diferença entre CONHECER o caminho e TRILHAR o caminho."')
  } else if(haha === 5){
    $("#morpheus").text('"O que é real? Como você define o "real"? Se você está falando sobre o que você pode sentir, o que você pode cheirar, o que você pode saborear e ver, o real são simplesmente sinais elétricos interpretados pelo seu cérebro."')
  } else if(haha === 6){
    $("#morpheus").text('"Assim como todo mundo, você nasceu em um cativeiro, preso em uma cela que você não pode sentir, provar ou tocar. Uma prisão para sua mente."')
  } else if(haha === 7){
    $("#morpheus").text('"Você precisa entender, a maioria destas pessoas não está preparada para despertar. E muitas delas estão tão inertes, tão desesperadamente dependentes do sistema, que irão lutar para protegê-lo."')
  } else if(haha === 8||haha===9){
    $("#morpheus").text('"A Matrix está em todo lugar . É tudo que nos rodeia. Mesmo agora, nesta sala. Você pode vê-la quando olha pela janela, ou quando você ligar sua televisão. Você pode sentir isso quando você vai para o trabalho, quando você vai à igreja , quando paga seus impostos. É o mundo que foi colocado diante dos seus olhos para cegá-lo da verdade."')
  }
} 