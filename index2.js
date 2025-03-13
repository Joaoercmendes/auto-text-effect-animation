const containerElement = document.querySelector('.container');

const activities = ['ran ', 'worked out ', 'drank water ', 'eaten well ', 'took care of yourself '];

let activitiesIndex = 0;

let charIndex = 0;

updateText();

function updateText () {

  charIndex++;

  containerElement.innerHTML = `<h1>When was the last time you ${activities[activitiesIndex].slice(0,charIndex)}?</h1>`;

  if (charIndex === activities[activitiesIndex].length) {
    charIndex = 0;
    activitiesIndex++;
  }

  if (activitiesIndex === activities.length) {
    activitiesIndex = 0;
  }

  setTimeout(updateText, 200)

}

