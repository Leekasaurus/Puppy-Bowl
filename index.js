const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2302-ACC-ET-WEB-PT-B';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${2302-acc-et-web-pt-b}/players`;
var playerRoster;
var TEAM_ID = 891;
var  COHORT_ID = 479;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {
        const response = await fetch(APIURL);
        //console.log(response);
        const players = await response.json();
        return players;
    } catch (error) {
        console.error('Uh oh, trouble fetching players!', error);
    }
};

const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/${id}`);
        const player = await response.json();
        return player;
    } catch (error) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, error);
    }
};

const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch(APIURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        })
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

const createNewPlayerForm = () => {
    const formHtml = `
    
    <form>
      <label for="Name">Name</label>
      <input type="text" name="name" id="name" />
      <label for="Breed">Breed</label>
      <input type="text" name="breed" id="breed" />
      <label for="age">Age</label>
      <input type="text" name="age" id="age" />
      <button type="submit">Submit</button>
    </form>
  `;
  newPlayerFormContainer.innerHtml = formHtml;

  const form = newPlayerFormContainer.querySelector("form");
  form.addEventListener("submit", async(event) => {
    event.preventDefault();
    let playerData = {
        name: form.name.value,
        imagae_url: form.imagae_url.value,
        age: form.age.value,
        breed: form.breed.value,
    }
  }) 
};





const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`~${APIURL}/${id}`, {
            method:"DELETE",
        });
        const player = await response.json();
        console.log(player);
        //reload the window
        window.location.reload();
    } catch (error) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            error
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
const renderAllPlayers = (playerList) => {
    let playerContainer = document.querySelector(`#player-container`);
    try {
        playerContainer.innerHtml = '';
        playerList.forEach((player) =>{
            const playerElement = document.createElement('div');
      playerElement.classList.add('party');
      playerElement.innerHTML = `
                <h2>${player.name}</h2>
                <p>${player.breed}</p>
                <p>${player.age}</p>
                <button class="details-button" data-id="${party.id}">See Details</button>
                <button class="delete-button" data-id="${party.id}">Delete</button>
            `;
            playerContainer.appendChild(playerElement);
        });;
   
// see details
const detailsButton = playerElement.querySelector('.details-button');
detailsButton.addEventListener('click', async (event) => {
  // get the id
  const playerId = event.target.dataset.id
  // send id to renderSinglePartyById function
  renderSinglePlayerById(playerId)
});

// delete pupper
const deleteButton = playerElement.querySelector('.delete-button');
deleteButton.addEventListener('click', async (event) => {
  // get the id
  const playerId = event.target.dataset.id
  // pass the id to deleteParty function
  deletePlayer(playerId)
  // get it off the page
  event.target.closest('div.party').remove()
});

} catch (error) {
console.error(error);
}
};


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
    try {
        
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);

    renderNewPlayerForm();
}

init();