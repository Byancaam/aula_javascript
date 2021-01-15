/*
 * DIO : Programação para internet com Javascript ( Básico)
*/

//Mostrando informações
//var nome = "Ana Maria";
//var idade = 29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo!"
//alert(nome +" tem " + idade + " anos");
//alert(idade + idade2);

//Algumas funções interessantes
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toLocaleUpperCase());
//console.log(frase.toLocaleLowerCase());

//Manipulando Array
//var lista = ["maca","pera","laranja" ]; // array
//console.log(lista);
//lista.push("uva");
//console.log(lista);
//lista.pop("uva");
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString()); // converte para string
//console.log(lista.join(" - ")); // converte para string

//Manipulando Dicionário
/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);
*/

//Lista em um dicionário
/*
var frutas = [{nome:"maçã", cor:"vermelha"},
              {nome:"uva", cor:"roxa"}
             ];
console.log(frutas[0].nome);
console.log(frutas[0].cor);
console.log(frutas[1].nome);
console.log(frutas[1].cor);
*/

//Uso de condicional
/*
var idade = 21;
if(idade >= 18){
  alert("Maior de idade");
}else{
  alert("Menor de idade");
};
*/

//Estrutura de Repetição usando While
/*
var count = 0;
while(count <= 5){
  console.log(count);
  alert(count);
  count ++;
}
*/

//Estrutura de Repetição usando for
/*
var count;
for(count = 0; count <= 5; count++){
  alert(count);
};
*/

//Manipulado datas
/*
var d = new Date();
alert(d.getDate());
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

// Funções
/*
function soma(n1,n2){
  return n1 + n2;
}
alert(soma(5,10));

function setReplace(frase, nome, novo_nome){
  return frase.replace(nome,novo_nome);
}

alert(setReplace("Vai Japao", "Japao","Brasil"));
*/

/*
function validarIdade(){
  var validar;

  if(idade >= 18){
    validar = true;
  }else{
    validar = false;
  }
  return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validarIdade(idade));
*/

function clicou(){
  document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
  //alert("Obrigado por clicar!");
}

function redirecionar(){
  window.open("https://www.globalempregos.com.br/");
}

function trocar(elemento){
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
  //alert("Trocar texto");
  elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  //alert("Trocar texto");
  elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
  alert("Pagina Carregada!");
}

function change(elemento){
  console.log(elemento.value);

}