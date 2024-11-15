import React,{useState}  from "react";
import Heading from "./Header";
import Footing from "./Footer";
import Note from "./Note";
//import notes from "./../notes";
import CreateArea from "./CreateArea";

function App()
{
    const [AllNotes, addNote] = useState([]);

    function handleClick(note){
        console.log(note);
        addNote(()=>{
            return [...AllNotes,note];
        });

    }

    function DeleteNote(noteIND){

        addNote(AllNotes.filter((note,ind)=>{
            return noteIND !==ind;
        }));
    }

    return (<div>
        <Heading />
        <CreateArea onAdd={handleClick} />

     {   AllNotes.map((note,ind)=>
            <Note 
            key={ind}
            Id={ind}
                title={note.title}
                content={note.content}
                onDelete={DeleteNote}
            />
        )}
        <Footing />
    </div>);
}

export default App;
