import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';

class NotesApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Best Notes App Ever</h1>
                <NewNote />
                <NotesList />
                <NoteEditor />
            </div>
        );
    }
}

export default NotesApp;