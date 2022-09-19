import React from 'react'

export default function Usuario() {
  const [nome, setNome] = React.useState("Catana")
  const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg")

  function mudarNome () {
    const novoNome = prompt("Qual seu nome?")
    setNome(novoNome)
  }

  function mudarImagem () {
    const novaImagem = prompt("Insira o link da imagem")
    setImagem(novaImagem)
  }

    return (
      <div class="usuario">
        <img onClick={mudarImagem} src={imagem} />
        <div class="texto">
          <strong>catanacomics</strong>
          <span onClick={mudarNome}>
            {nome}
            <ion-icon name="pencil" ></ion-icon>
          </span>
        </div>
      </div>
    );
  }