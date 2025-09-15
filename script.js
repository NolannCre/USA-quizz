const etatsUSA = {
    "Alabama": 1,
    "Alaska": 2,
    "Arizona": 3,
    "Arkansas": 4,
    "California": 5,
    "Colorado": 6,
    "Connecticut": 7,
    "Delaware": 8,
    "Florida": 9,
    "Georgia": 10,
    "Hawaii": 11,
    "Idaho": 12,
    "Illinois": 13,
    "Indiana": 14,
    "Iowa": 15,
    "Kansas": 16,
    "Kentucky": 17,
    "Louisiana": 18,
    "Maine": 19,
    "Maryland": 20,
    "Massachusetts": 21,
    "Michigan": 22,
    "Minnesota": 23,
    "Mississippi": 24,
    "Missouri": 25,
    "Montana": 26,
    "Nebraska": 27,
    "Nevada": 28,
    "New Hampshire": 29,
    "New Jersey": 30,
    "New Mexico": 31,
    "New York": 32,
    "North Carolina": 33,
    "North Dakota": 34,
    "Ohio": 35,
    "Oklahoma": 36,
    "Oregon": 37,
    "Pennsylvania": 38,
    "Rhode Island": 39,
    "South Carolina": 40,
    "South Dakota": 41,
    "Tennessee": 42,
    "Texas": 43,
    "Utah": 44,
    "Vermont": 45,
    "Virginia": 46,
    "Washington": 47,
    "West Virginia": 48,
    "Wisconsin": 49,
    "Wyoming": 50
};
 globalThis.oldNumero = 1;

let listNumero = [];
for (let i = 1; i <= 50; i++) {
    listNumero.push(i);
}

function clicEtat(numero) {
    const state = document.getElementById(String(numero));
    state.style.fill = "blue";
    const oldState= document.getElementById(String(oldNumero));
    oldState.style.fill = "black";
    globalThis.oldNumero = numero;
}

function pickState() {
    globalThis.numero = listNumero.pop();
    const state = document.getElementById(String(numero));
    state.style.fill = "white";
    console.log(numero);
}

function verification() {
    const reponse = document.getElementById('response').value;
    const bool = etatsUSA[reponse] == numero;
    console.log(bool);
    if (bool) {
        document.getElementById('response').value = "Correct!";
        const state = document.getElementById(String(numero));
        state.style.fill = 'green';
    }
    else {
        document.getElementById('response').value = "Incorrect! The correct answer was " + Object.keys(etatsUSA).find(key => etatsUSA[key] === numero) + ".";
        const state = document.getElementById(String(numero));
        state.style.fill = 'red';
    }
    pickState();
}

function createAlphabetNav() {
    const alphabetNav = document.getElementById('alphabet-nav');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    letters.forEach(letter => {
        const btn = document.createElement('button');
        btn.textContent = letter;
        btn.onclick = () => filterByLetter(letter);
        alphabetNav.appendChild(btn);
    });
}


function createStateButtons() {
    const statesGrid = document.getElementById('states-grid');
    statesGrid.innerHTML = '';

    Object.keys(etatsUSA).sort().forEach(etat => {
        const btn = document.createElement('button');
        btn.className = 'state-button';
        btn.textContent = etat;
        btn.dataset.state = etat;
        btn.onclick = () => clicEtat(etatsUSA[etat]);
        statesGrid.appendChild(btn);
    });
}

function filterByLetter(letter) {
    document.querySelectorAll('.alphabet-nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    document.querySelectorAll('.state-button').forEach(btn => {
        const stateName = btn.dataset.state;
        if (stateName.charAt(0).toLowerCase() === letter.toLowerCase()) {
            btn.classList.remove('hidden');
        } else {
            btn.classList.add('hidden');
        }
    });

    document.getElementById('container').scrollIntoView({ behavior: 'smooth' });
}


function setupSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.oninput = function () {
        const searchTerm = this.value.toLowerCase();

        document.querySelectorAll('.state-button').forEach(btn => {
            const stateName = btn.dataset.state.toLowerCase();
            if (stateName.includes(searchTerm)) {
                btn.classList.remove('hidden');
            } else {
                btn.classList.add('hidden');
            }
        });


        if (searchTerm) {
            document.querySelectorAll('.alphabet-nav button').forEach(btn => {
                btn.classList.remove('active');
            });
        }
    };
}

function change(element) {
    if (element == 'learn') {
        const bouton = document.getElementById('start-button');
        bouton.style.visibility = "hidden";
        const etat = document.getElementById('container');
        etat.style.visibility = "visible";
        document.getElementById('alphabet-nav').style.visibility = "visible";

        createAlphabetNav();
        createStateButtons();
        setupSearch();
    }
    if (element == 'quiz') {
        const bouton = document.getElementById('start-button');
        bouton.style.visibility = "hidden";
        document.getElementById('container').style.visibility = "hidden";
        const element = document.getElementById('response-section');
        element.style.visibility = "visible";

        pickState();
    }
    document.getElementById('start-button').style.height = "0px";
    document.getElementById('back').style.visibility = 'visible';
    document.getElementById('tools').style.height = '500px';
}

function back() {
    document.getElementById('alphabet-nav').style.visibility = "hidden";
        document.getElementById('alphabet-nav').style.height = "0px";
    document.getElementById('back').style.visibility = 'hidden';
    document.getElementById('tools').style.height = '0px';
    document.getElementById('container').style.visibility = 'hidden';
    document.getElementById('response-section').style.visibility = 'hidden';
    document.getElementById('start-button').style.visibility = 'visible';
    document.getElementById('start-button').style.height = 'auto';
    document.getElementById('response').value = '';
    for (let i = 1; i <= 50; i++) {
        const state = document.getElementById(String(i));
        state.style.fill = "black";
    }
    const state = document.getElementById(String(oldNumero));
    state.style.fill = "black";
    globalThis.oldNumero = 1;
    globalThis.listNumero = [];
    for (let i = 1; i <= 50; i++) {
        listNumero.push(i);
    }
}
