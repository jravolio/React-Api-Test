import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

interface CharacterProps {
  selectedCharacter: any;
}

interface EpisodeProps {
  name: string;
  id: number;
}

export function Character({ selectedCharacter }: CharacterProps) {
  const [episodes, setEpisodes] = useState<EpisodeProps[]>([]);
  const selectedCharacterEpisode = selectedCharacter.episode;

  useEffect(() => {
    const fetchEpisodes = async () => {
      const episodesData = await Promise.all(
        selectedCharacterEpisode.map((ep: any) => axios.get(ep))
      );
      const episodes = episodesData.map((ep: any) => ({
        name: ep.data.name,
        id: ep.data.id,
      }));
      setEpisodes(episodes);
    };
    fetchEpisodes();
  }, [selectedCharacterEpisode]);

  console.log(selectedCharacterEpisode);
  return (
    <main>
      <div className={styles.mainInfo}>
        <img src={selectedCharacter.image} alt="" />
        <h1>{selectedCharacter.name}</h1>
        <div className="status">
          <div className={"dot " + selectedCharacter.status}></div>
          <h3 className={selectedCharacter.status}>
            {selectedCharacter.status}
          </h3>
        </div>
        <h1>{selectedCharacter.species}</h1>
        <h1>{selectedCharacter.gender}</h1>
      </div>
      <div className={styles.charInfo}>
        <div>
          <div className={styles.origin}>
            <h1>Origin</h1>
            <h2>{selectedCharacter.origin.name}</h2>
            <h2>{selectedCharacter.origin.url}</h2>
          </div>
          <div className={styles.location}>
            <h1>Location</h1>
            <h2>{selectedCharacter.location.name}</h2>
            <h2>{selectedCharacter.location.url}</h2>
          </div>
          <div className={styles.episodes}>
            <h1>Episodes</h1>
            {episodes.map((test: any) => {
              return (
                <div>
                  <h2>{test.name}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
