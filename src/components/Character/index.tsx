import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";


interface CharacterProps{
  selectedCharacter: any;
}


export function Character({selectedCharacter}: CharacterProps) {
  const [episode, setEpisode] = useState('')
  
  return (
    <>
      <div>
        <img src={selectedCharacter.image} alt="" />
        <h1>{selectedCharacter.name}</h1>
        <h1>{selectedCharacter.status}</h1>
        <h1>{selectedCharacter.species}</h1>
        <h1>{selectedCharacter.gender}</h1>
      </div>
      <div>
        <h1>{selectedCharacter.origin.name}</h1>
        <h1>{selectedCharacter.origin.url}</h1>
        <h1>{selectedCharacter.location.name}</h1>
        <h1>{selectedCharacter.location.url}</h1>
        {selectedCharacter.episode.map((episodes: any) =>{
          axios.get(episodes)
            .then((res: any) => setEpisode(res))
            .then(() => console.log(episode))
        })}
      </div>
    </>
  );
}
