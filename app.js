const title = document.getElementById('title');
const numContainer = document.getElementById('number-container');
const num = document.getElementById('number');
const astronautsContainer = document.getElementById('astronautsContainer');
const url = 'http://api.open-notify.org/astros.json';
const gitLink = document.getElementById('github');

const fetchAstronauts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    renderAstronauts(data);
}

const renderAstronauts = data => {
    const astronauts = data.people;
    num.textContent = data.number;

    // console.log(astronauts);
    
    for(let i = 0; i < astronauts.length; i++){
        const astDiv = document.createElement('div');
        const astId = document.createElement('span')
        const astName = document.createElement('p');
        const astCraft = document.createElement('span');
        const astPic = document.createElement('img');

        var astNum = 1;

        console.log(JSON.stringify(astronauts[i].name));

        astId.textContent = i+1;
        astName.textContent = astronauts[i].name;
        astCraft.textContent = astronauts[i].craft;
        astPic.setAttribute('src', `./images/${astId.textContent}.jpg`);

        astPic.style.width = '200px';
        astPic.style.height = '200px';

        astDiv.classList.add(`astronaut-${astNum}`);
        astDiv.appendChild(astId);
        astDiv.appendChild(astName);
        astDiv.appendChild(astCraft);
        astronautsContainer.appendChild(astDiv);

        astNum++;
    }

    
}

fetchAstronauts();

gitLink.addEventListener('click', () => {
    window.open('https://github.com/alperonoberto/howManyPeopleAreAtSpaceRN');
});