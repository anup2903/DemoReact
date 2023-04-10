import React from 'react'
import NoteContext from '../NoteContext'
const NoteState = (props) => {
    const s1={
        "name":"Context",
        "number":"284AE6W9"
    }
  return (
    <NoteContext.Provider value={s1}>{props.children}</NoteContext.Provider>
  );
}

export default NoteState