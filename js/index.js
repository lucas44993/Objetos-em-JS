/*function soma(valor1,valor2){
  const y = valor1 + valor2
  console.log(y)
}
const x = soma (20,20)
console.log(x)*/

/*const carro = {
  marca:"ford",
  modelo: "ká",
  ano: 2015,
  placa: "abc-1234",
  buzina: function () {alert('biiiiiiiiiii')},
  completo: function (){
    return "a marca é "+this.marca+" e o modelo é:"+this.modelo; 
  }
};
console.log(carro.ano) isso mostra algo dentro do objeto
console.log(carro["marca"]) isso mostra algo dentro do objeto de outra forma caso tenha um "."
console.log(carro.completo()) */
/*function eventoClick(){
  alert('acionou um evento de click');
  document.body.style.backgroundColor = "yellow";
}
function eventodblclick(){
     alert('Evento de clique duplo');
}
function viraVermelho(){
  const div = document.getElementById("teste");
  div.style.backgroundColor = "red"
}
function viraAzul(){
  const div = document.getElementById("teste")
  div.style.backgroundColor = "blue"
}
function adicionaTexto (){
  let p = document.getElementById("texto")
  p.append('o mouse moveu');
}
function mudou(){
  console.log('mudou')

}
function teclaPressionada(){
  console.log("tecla pressionada")
}*/
                //0       //1     //2       //3 
/*const lista = [
 "arroz",
 "feijão",
 "macarrão",
 "leite"
];

lista[0] = "cafe";
alert(lista[0]);
console.log(lista);*/

/*const pessoa = [
  "lucas",
  "abrão"
  ,30
]//array
const pessoa1 = {
  nome: "lucas",
  sobrenome: "abraão",
  idade: 30
} //objeto

pessoa1.nome;
pessoa[0]*/

const pessoa = ["lucas","abrão", 30 , "professor"]
const x = 1
alert (Array.isArray(x))