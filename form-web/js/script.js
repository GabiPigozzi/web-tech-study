//criando váriaveis

var nome = document.querySelector("#nome");
var cpf = document.querySelector("#cpf");
var telefone = document.querySelector("#telefone")
var button = document.querySelector("button");
var lista = document.querySelector(".lista");

//criando função

button.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValeuNome = nome.value;
    const inputValeucpf = cpf.value;
    const inputValeutelefone = telefone.value;
    const templateHTML = `<li><p>${inputValeuNome}</p>
                              <p>${inputValeucpf}</p>
                             <p> ${inputValeutelefone}</p></li>`;
  //incluir itens no html

  lista.innerHTML += templateHTML;

  //limpando campo

  nome.value ="";
  cpf.value="";
  telefone.value="";

})