import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";


function App() {

    const [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((note, index)=>{
                return index !== id;
            });
        });
    }

  return <div>
    <Header />
    <CreateArea 
        onAdded={addNote}
    />
    {notes.map((note, index) => 
    <Note key={index} id={index} title={note.title} content={note.content} onDeleted={deleteNote}/>
    )}
    <Footer />
    </div>
}

export default App;

