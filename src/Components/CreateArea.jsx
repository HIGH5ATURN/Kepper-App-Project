import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from '@mui/material/Fab';
import { Zoom } from "@mui/material";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const[expanded,setExpanded]=useState(false);

    function handleChange(event) {
        const { value, name } = event.target;

        // const name = event.target.name;
        // const value= event.target.value;
        setNote((prevValue) => ({
            ...prevValue, // Spread operator to retain other properties
            [name]: value // Update only the changed property dynamically
        }));
    }

    function AddNote() {
        event.preventDefault();
        props.onAdd(note);
        setNote({ title: "", content: "" });
    }

    function Expand(){

        setExpanded(true);
    }
    function Contract(){
        setExpanded(false);
    }

    return (
        <div>
            <form className="create-note">
              { expanded && <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />}
                <textarea name="content" onFocus={Expand} placeholder="Take a note..." rows={expanded?"3":"1"} onChange={handleChange} value={note.content} />
                <Zoom in={expanded?true:false}>
                    <Fab onClick={() => {
                        AddNote();
                    }}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
