import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { fetchSinglePlayer, deletePlayer } from "../../API";

function SinglePlayer() {
    const [player, setPlayer] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

useEffect(() => {
    async function getPlayer() {
        try {
            const fetchedPlayer = await fetchSinglePlayer(id);
            console.log(fetchedPlayer);
            
            setPlayer(fetchedPlayer);


        } catch (error) {
            console.error(error);
        }
    } 
    getPlayer();
}, [id]);


async function handleDelete() {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${player.name}?`)

    if(confirmDelete) {
        try {
            await deletePlayer(player.id);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }
    
}



    return (
        <div>
            <h1 className="sp"> Single Player </h1>
            
            <div className="personal">
                <h2> {player.name} </h2>
                <p> ID: {player.id} </p>
                <p> Breed: {player.breed} </p>
                <p> Status: {player.status} </p>
                <img src={player.imageUrl} alt={`photo of puppy: ${player.name}`} width="200" />
            
            </div>
            
            <button onClick={ ()=> navigate('/') }>Back to All Players</button>
            <button onClick={handleDelete}>Delete Player </button>
        </div>
    )
}

export default SinglePlayer