/*OBJETIVO 1- quando clicar no botão do personagem na lista, marcar o botão como selecionado
    passo 1 - pegar os botoes no JS pra poder verificar quando o usuario clicar em cima de um deles.
    passo 2 - adicionar a classe "selecionado" no botão que o usuario clicou.
    passo 3 - verificar se ja existe um botão selecionado, se sim devemos remover a seleção dele.

OBJETIVO 2- quando clicar no botão do personagem mostrar as   informações    do personagem
   passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele.
   passo 2 - adicionar a classe "selecionado" no personagem que o usuario selecionou
   passo 3 - verificar se ja existe um personagem selecionado, se sim, devemos remver a seleção dele
   */

const botoes = document.querySelectorAll('.botao')

const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

     desselacinarbotao()
     desselecionaPersonagem()

     botao.classList.add("selecionado")
     personagens[indice].classList.add("selecionado")
    })
})

function desselecionaPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado")
    personagemSelecionado.classList.remove("selecionado")
}

function desselacinarbotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado")
    botaoSelecionado.classList.remove("selecionado")
}
