// ADICIONAR TAREFA 

const button = document.querySelector(".add")
const input = document.getElementById("digiteTarefa")
const listaCompleta = document.querySelector(".ul-tarefas")

let minhaLista = []

function adicionarTarefa() {
    minhaLista.push({
        tarefa: input.value,
        concluida: false})

    input.value = ""

    mostrarTarefa()
}

function mostrarTarefa() {
    let novaLista = ``

    minhaLista.forEach((item, posicao) =>{

        novaLista = novaLista + ` 
            <li class="li-tarefa ${item.concluida && "done"}">
                <img id="adicionar" src="lista-de-controle.png" 
                onclick="concluirTarefa(${posicao})"
                alt="Adicionar">
                <p>${item.tarefa}</p>
                <img id="deletar" src="excluir.png" onclick="deletarTarefa(${posicao})" alt="Deletar">
            </li>`
    })

    listaCompleta.innerHTML = novaLista

    localStorage.setItem("Lista", JSON.stringify(minhaLista))
}

function concluirTarefa(posicao){
    minhaLista[posicao].concluida = !minhaLista[posicao].concluida

    mostrarTarefa()
}

function deletarTarefa(posicao) {
    minhaLista.splice(posicao, 1)

    mostrarTarefa()
}

function recarregarTarefas(){
    const tarefasLocalStorage = localStorage.getItem("Lista")

    if(tarefasLocalStorage){
        minhaLista = JSON.parse(tarefasLocalStorage)
    }

    mostrarTarefa()
}

recarregarTarefas()

button.addEventListener("click", adicionarTarefa)

