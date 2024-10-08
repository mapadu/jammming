import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';


function App() {

  const [results, setResults] = useState([]);

  const [playlist, setPlaylist] = useState([]);



  const addToPlaylist = (track) => {
    setPlaylist([track, ...playlist])
  }

  const removeFromPlaylist = (index) => {
    setPlaylist(playlist.filter((track, i ) => i !== index))
  }


  return (
    <div className="App">

      <div className="Header">
          <h1>jammming</h1>
          <SearchBar setResults={setResults}/>
      </div>
      <div className="contentbox" >
          <SearchResults results={results} addToPlaylist={addToPlaylist} />
          <Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist} />
      </div>
      
    </div>
  );
}

export default App;
