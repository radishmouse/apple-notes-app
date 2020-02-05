import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import SearchBar from './SearchBar';

class NotesApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: 'help me i am a search bar',
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
                    notes={this.state.notes}
                />
                <NoteEditor />
            </div>
        );
    }

    _setSearchText = (searchText) => {
     this.setState({
        searchText
     }, () => {
        console.log('updated search text');
     });   
    }
}

export default NotesApp;