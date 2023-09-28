import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
  }

  function getExpanded(){
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleClick}>
      { isExpanded ?  <input 
          onChange={handleChange}
          name="title"
          placeholder="Heyo: "
          value={note.title}
        /> : null}
       
        <textarea
          onChange={handleChange}
          onClick={getExpanded}
          name="content"
          placeholder="Imma snap on..."
          value={note.content}
          rows={ isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded ? true : false}>
        <Fab
          onClick={() => {
            props.onAdded(note);
            setNote({ title: "", content: "" });
          }}
        >
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
