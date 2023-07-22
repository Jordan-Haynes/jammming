import React, { useState, useCallback } from 'react';
import "./Track.css";

const Track = (props) => {
  
  const addTrack = useCallback(
    (event) => {
      props.add(props.track);
    },
    [props.add, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.remove(props.track);
    },
    [props.remove, props.track]
  );
  

  /*
  const addTrack = () => {
    console.log("addTrack() has been called");
  }

  const removeTrack = () => {
    console.log("addTrack() has been called");
  }
  */
  
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      <button className="Track-action" onClick={ props.isAdded ? removeTrack : addTrack }>{ props.isAdded ? "-" : "+"}</button>
    </div>
  )
};

export default Track;