import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import SearchBar from './SearchBar';

class NotesApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentNoteId: '',
            searchText: '',
            notes: [
                {
                    id: 'aaaaaaa',
                    title: 'first note',
                    copy: 'la la la'
                },
                {
                    id: '4444444',
                    title: 'second note',
                    copy: 'ba ba ba'
                },
                {
                    id: 'askdfhjg',
                    title: 'third note',
                    copy: 'ha ha ha'
                },
                {
                    id: 'asfasdf',
                    title: 'fourth note',
                    copy: 'ha ha ha'
                },
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>Notes App</h1>
                <NewNote />
                <SearchBar 
                    handleChange={this._setSearchText}
                    text={this.state.searchText} 
                />
                <NotesList 
                    notes={this._getFilteredNotes()}
                    handleClick={this._selectNote}
                />
                <NoteEditor 
                    note={this._getNoteById()}
                />
            </div>
        );
    }
    
    _getNoteById = () => this.state.notes.find(note => note.id === this.state.currentNoteId) || {}

    _getFilteredNotes = () => {
        const filteredArray = this.state.notes.filter(note => {

            const titleDoesMatch = note.title.toLowerCase().includes(this.state.searchText.toLowerCase());
            const copyDoesMatch = note.copy.toLowerCase().includes(this.state.searchText.toLowerCase());

            return titleDoesMatch || copyDoesMatch;

        });

        return filteredArray;
    }

    _setSearchText = (searchText) => {
        this.setState({
            searchText
        }, () => {
            console.log('updated search text');
        });   
    }

    _selectNote = (currentNoteId) => {
        this.setState({
            currentNoteId
        }, () => {
            console.log('updated current id')
        });
    }
}

export default NotesApp;