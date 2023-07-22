import React, { useCallback, useState } from "react";
import "./App.css";
import { Playlist, SearchBar, SearchResults } from "../index";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  const tracklist = [
    {
      id: 1,
      name: "Elden Ring",
      artist: "Tsukasa Saitoh",
      album: "Elden Ring (Original Soundtrack)",
    },
    {
      id: 2,
      name: "Rest My Chemistry",
      artist: "Interpol",
      album: "Our Love To Admire",
    },
    {
      id: 3,
      name: "As I Roved Out",
      artist: "Loreena McKennitt",
      album: "The Wind That Shakes The Barley",
    },
    {
      id: 4,
      name: "Elden Ring",
      artist: "Tsukasa Saitoh",
      album: "Elden Ring (Original Soundtrack)",
    },
    {
      id: 5,
      name: "Rest My Chemistry",
      artist: "Interpol",
      album: "Our Love To Admire",
    },
    {
      id: 6,
      name: "As I Roved Out",
      artist: "Loreena McKennitt",
      album: "The Wind That Shakes The Barley",
    },
    {
      id: 7,
      name: "Elden Ring",
      artist: "Tsukasa Saitoh",
      album: "Elden Ring (Original Soundtrack)",
    },
    {
      id: 8,
      name: "Rest My Chemistry",
      artist: "Interpol",
      album: "Our Love To Admire",
    },
    {
      id: 9,
      name: "As I Roved Out",
      artist: "Loreena McKennitt",
      album: "The Wind That Shakes The Barley",
    },
  ];

  const addTrack = useCallback((track) => {
      if (playList.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlayList((prevTracks) => [...prevTracks, track]);
    },
    [playList]
  );

  const removeTrack = useCallback((track) => {
    setPlayList((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const addToSpotify = () => {
    console.log("addToSpotify() has been called")
  };

  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <h1 className="title">Jammming!</h1>
      <SearchBar />
      <div className="main_content">
        <SearchResults tracks={tracklist} onAdd={addTrack} />
        <Playlist
          tracks={playList}
          onRemove={removeTrack}
          playlistName={playlistName}
          savePlaylist={addToSpotify}
          onNameChange={updatePlaylistName}
        />
      </div>
    </div>
  );
}

export default App;
