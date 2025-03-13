const containerElement = document.querySelector('.container');

const careers = ['YouTuber', 'Stupid', 'WebDev', 'Driver', 'Golfclub']

let careerIndex = 0;

//Este segundo index é para cada uma das letras de cada elemento do array carreers
let characterIndex = 0;

updateText();

function updateText() {

  characterIndex++;

  containerElement.innerHTML = 
    //[careerIndex.slice(0,characterIndex)] anexa cada letra do elemento tendo em conta o indice characterIndex, que vai sendo incrementado.
    `<h1>Why are you
    ${careers[careerIndex].slice(0,characterIndex)}
    ?</h1>`;

  //Se characterIndex for igaul ao numero de caracteres em careers[careerIndex].length incrementa  carreer index e coloca characterIndex a 0;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  //recomencar o loop
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  //chamar a função a cada 400ms até correr todos os characterIndex
  setTimeout(updateText, 200);
}

