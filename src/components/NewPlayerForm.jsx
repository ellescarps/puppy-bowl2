import { addNewPlayer } from "../../API"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function NewPlayerForm() {
const [formData, setFormData] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: "",
});

const navigate = useNavigate();


const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (!formData.name || !formData.breed || !formData.status || !formData.imageUrl) {
        alert("Please fill in all the fields");
        return;
    }
    
    try {
        await addNewPlayer(formData);
        alert("New player added successfully");

        setFormData({
            name: "",
            breed: "",
            status: "",
            imageUrl: "",
        });

            navigate("/");
     } catch (error) {
        console.error(error);
        }
    };


    return (
        <div>
            <h1 className="npf">New Player Form</h1>

            <form className="form" onSubmit={handleSubmit}>
                <section>
                <label>
                    Name <br />
                    <input type="text" name="name" placeholder="puppy name" 
                    value={formData.name} onChange={handleInputChange}  />
                </label> 
                </section>
                <label> 
                    Breed <br />
                    <input type="text" name="breed" placeholder="breed" 
                    value={formData.breed} onChange={handleInputChange} />
                </label>
                <label>
                    Status <br />
                    <input type="text" name="status" placeholder="bench or field" 
                    value={formData.status} onChange={handleInputChange} />
                </label>
                <label>
                    Image <br />
                    <input type="text" name="imageUrl" placeholder="Image Url"
                    value={formData.imageUrl} onChange={handleInputChange} />
                </label> 
                <button type="submit" disabled={!formData.name || !formData.breed || !formData.status || !formData.imageUrl}>Add Player</button>
            </form>
 

        </div>
    );
}

export default NewPlayerForm