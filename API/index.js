




export async function fetchPlayers() {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players`);
        const json = await response.json();
        console.log(json);
        return json.data.players;
    } catch (error) {
        console.error(error);
        return [];
    }
}


export async function fetchSinglePlayer(playerId) {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players/${playerId}`);
        const json= await response.json();
        return json.data.player;
    } catch (error) {
        console.error(error);
    }
    
}

export async function deletePlayer(playerId) {
    try {
        const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players/${playerId}`, {
            method: "DELETE",
    });

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
    
}


export async function addNewPlayer(formData) {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(formData),
        })
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
    
}


