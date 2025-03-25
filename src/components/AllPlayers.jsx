import { fetchPlayers } from "../../API"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [searchParams, setSearchParams] = useState("");
    console.log(searchParams);
    
    
useEffect(() => {
    async function getPlayers() {
        try {
            const fetchedPlayers = await fetchPlayers();
            console.log(fetchedPlayers);
            
            setPlayers(fetchedPlayers);
        } catch (error) {
            console.error(error);
        }
    }
     getPlayers();
}, []);

const playersToDisplay = 
searchParams ? players.filter((player) => player.name.toLowerCase().includes(searchParams)) 
: players;

return (
    <div>
        <div className="main">
            <h1 className="pb">Puppy Bowl</h1>
        </div>
        
         <br />
        <div className="space">
        <Link to="/new-player">
        <button> Add New Player </button> 
        </Link>

        <label>
            Search:{" "} <br />
            <input 
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParams(e.target.value.toLowerCase())}
            
            />
        </label>            
        </div>

        <div className="container2">
        <ul style={{ listStyleType: 'none'}}>
            {playersToDisplay.length > 0 ? (
                playersToDisplay.map((player) => (
                    <li key={player.id}>
                        <h4>{player.name}</h4>
                        {player.imageUrl ? (
                            <img src={player.imageUrl} alt={`photo of puppy: ${player.name}`} width="200" />
                        ) : (
                            <p>No image available</p> 
                        )}
                        <Link to={`/players/${player.id}`}> 
                            <button>See Details</button>
                        </Link>
                    </li>
                ))
            ) : (
                <p>No players found.</p>
            )}
        </ul>
        </div>
       
    </div>
);
}

export default AllPlayers