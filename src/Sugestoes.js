function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.link} />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

export default function Sugestoes() {
  const info = [
    {
      link: "assets/img/bad.vibes.memes.svg",
      nome: "bad.vibes.memes",
      razao: "Segue você",
    },
    {
      link: "assets/img/chibirdart.svg",
      nome: "chibirdart",
      razao: "Segue você",
    },
    {
      link: "assets/img/razoesparaacreditar.svg",
      nome: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },
    {
      link: "assets/img/adorable_animals.svg",
      nome: "adorable_animals",
      razao: "Segue você",
    },
    {
      link: "assets/img/smallcutecats.svg",
      nome: "smallcutecats",
      razao: "Segue você",
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {info.map((s) => (
        <Sugestao link={s.link} nome={s.nome} razao={s.razao} />
      ))}
    </div>
  );
}
