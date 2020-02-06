import React from 'react';

function NoteEditor({
    note,
    handleChange
}) {

    return (
        <div>
            <input 
                value={note.title} 
                onChange={(event) => {
                    // NOOOOOOOOO!
                    // Don't mutate an object or array
                    // that you receive as an argument.
                    // note.title = event.target.value;  
                    
                    // Instead, send back a copy
                    // with the updated "title" 
                    handleChange({
                        ...note,
                        title: event.target.value
                    });
                }}
            />
            <br />
            <textarea 
                value={note.copy} 
                onChange={(event) => {
                    handleChange({
                        ...note,
                        copy: event.target.value
                    });
                }}
            />
        </div>
    );
}

export default NoteEditor;