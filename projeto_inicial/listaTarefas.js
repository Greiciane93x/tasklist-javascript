import BotaoConclui from "./components/concluiTarefa.js"
import BotaoDeleta from "./components/deletaTarefa.js"

const criarTarefa = (evento) => {

    evento.preventDefault()
     

    const lista = document.querySelector('[data-list]')
  
    const input = document.querySelector('[data-form-input]')
    const valor = input.value 
    const tarefa = document.createElement('li')
    // let mensagemErro = document.createElement('li')
    // mensagemErro.classList.add('mensagem-erro')
  
    // if(input.value == ""){
    //     mensagemErro.innerHTML =  `<p class="mensagem-erro">Favor, não inserir tarefa vazia</p>` 
    //     lista.appendChild(mensagemErro)
    // }else{
        
    
        var data = new Date(); 
        var dia = data.getDate(); 
        var mes = data.getMonth()+1; 
        var ano = data.getFullYear(); 
        tarefa.classList.add('task')
        const conteudo = `<p class="content">${valor}</p>` 
        const refData = `<div class="content-data">${dia}/${mes}/${ano}</div>` 

        
        tarefa.innerHTML = refData + conteudo
        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(BotaoDeleta())
        lista.appendChild(tarefa)
 

    input.value = ""
}

const novaTarefa = document.querySelector('[data-form-button]')




novaTarefa.addEventListener('click',  criarTarefa)
