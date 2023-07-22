import React, { useState } from "react";
import "./Playlist.css";
import { Tracklist } from "../index";

const Playlist = (props) => {

  return (
    <div className="playlist">
      <input
        type="text"
        id="playlistName"
        name="playlistName"
        placeholder={props.playlistName}
      />
      <Tracklist
        tracks={props.tracks}
        isAdded={true}
        onRemove={props.onRemove}
      />
      <button className="playlist-save" onClick={props.savePlaylist}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
