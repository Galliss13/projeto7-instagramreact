function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.link}/>
      </div>
      <div class="usuario">{props.texto}</div>
    </div>
  );
}

export default function Stories() {
  const info = [
    { texto: "9gag", link: "assets/img/9gag.svg" },
    { texto: "meowed", link: "assets/img/meowed.svg" },
    { texto: "barked", link: "assets/img/barked.svg" },
    {
      texto: "nathanwpylestrangeplanet",
      link: "assets/img/nathanwpylestrangeplanet.svg",
    },
    { texto: "wawawicomics", link: "assets/img/wawawicomics.svg" },
    { texto: "respondeai", link: "assets/img/respondeai.svg" },
    { texto: "filomoderna", link: "assets/img/filomoderna.svg" },
    { texto: "memeriagourmet", link: "assets/img/memeriagourmet.svg" },
  ];

  return (
    <div class="stories">
      {info.map((i) => (
        <Story texto={i.texto} link={i.link} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
