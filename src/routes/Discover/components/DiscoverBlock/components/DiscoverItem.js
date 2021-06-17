import React, { useState, useEffect } from 'react';
import '../styles/_discover-item.scss';
import Player from '../../../../../common/components/Player'; 

function DiscoverItem({ images, name, track }) { //imageURL, ObjectName, TrackURL
  
    const [trackURI, setTrackUri] = useState('')
    
    const handleClick = (track) => () => setTrackUri({track}); // test

    const PlayTrack = () => <button onClick={handleClick({track})}>Play</button>;

    const DiscoverCoverArt = () => //Aplicamos estilo a imágenes de componente y las hacemos en hyperlinks
    <a 
      className="discover-item__art" 
      style={{ backgroundImage: `url(${images[0].url})` }}
      href={track}
  />;

    const DiscoverSongName = () => //Nombre asociado a componente
    <a href={track}>{name}</a>;
    
   //console.log(trackURI) si jala
  return (
    <>
    <div className="discover-item animate__animated animate__fadeIn">

      <DiscoverCoverArt />
      <DiscoverSongName />
    </div>

    </>
  );
  }
// Logre boton que detete cada URI y corrabore integrando player ( <Player track={track} /> en render )
export default DiscoverItem;

/* BACKUP
function DiscoverItem({ images, name, track }) { //imageURL, ObjectName, TrackURL
  
  const [trackURI, setTrackUri] = useState('')
  
  const handleClick = value => () => console.log(value); // test

  const FooBar = () => <button onClick={handleClick('Bar')}>Speak</button>;

  const DiscoverCoverArt = () => //Aplicamos estilo a imágenes de componente y las hacemos en hyperlinks
  <a 
    className="discover-item__art" 
    style={{ backgroundImage: `url(${images[0].url})` }}
    href={track}
/>;

  const DiscoverSongName = () => //Nombre asociado a componente
  <a href={track}>{name}</a>;

  //console.log({track})
    return (
    <div className="discover-item animate__animated animate__fadeIn">
      <FooBar />
      <DiscoverCoverArt />
      <DiscoverSongName />
    </div>
  );
  }
*/
