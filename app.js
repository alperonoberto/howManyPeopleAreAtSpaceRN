const title = document.getElementById('title');
const numContainer = document.getElementById('number-container');
const num = document.getElementById('number');
const astronautsContainer = document.getElementById('astronauts');
const url = 'http://api.open-notify.org/astros.json';

const fetchAstronauts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    renderAstronauts(data);
}

const renderAstronauts = data => {
    const astronauts = data.people;
    num.textContent = data.number;

    console.log(astronauts);
    
    for(let i = 0; i < astronauts.length; i++){
        const astDiv = document.createElement('div');
        const astName = document.createElement('p');
        const astCraft = document.createElement('span');

        var astNum = 1;

        console.log(JSON.stringify(astronauts[i].name));

        astName.textContent = astronauts[i].name;
        astCraft.textContent = astronauts[i].craft;

        astDiv.classList.add(`astronaut-${astNum}`);
        astDiv.appendChild(astName);
        astDiv.appendChild(astCraft);
        astronautsContainer.appendChild(astDiv);

        astNum++;
    }

    
}

fetchAstronauts();