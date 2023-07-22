import React, { useState } from 'react';
import Track from '../Track/Track';

const Tracklist = (props) => {

  return (
    <div className='tracklist'>
        {props.tracks.map((track) => {
            return(
                <Track
                    track={track}
                    key={track.id}
                    isAdded={props.isAdded}
                    add={props.add}
                    remove={props.onRemove}
                />
            )
        })}
    </div>
  )
};

export default Tracklist;