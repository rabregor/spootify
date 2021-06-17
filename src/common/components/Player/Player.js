import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepForward,
  faPlayCircle,
  faStepBackward,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import './_player.scss';
import  DiscoverItem  from '../../../routes/Discover/components/DiscoverBlock/components/DiscoverItem';

//import SpotifyPlayer from 'react-spotify-web-playback';
import SpotifyPlayer from 'react-spotify-player';

const size = {
  width: '100%',
  height: 300,
};
const view = 'coverart'; // or 'coverart'
const theme = 'white'; // or 'white'

function Player({ track }) {
  return(
    <>
    <SpotifyPlayer
    showSaveIcon
    uri={track ? [track]:'spotify:album:2Xk9iyx7nSm6evrOKCAypb'}
    size={size}
    view={view}
    theme={theme}
    />
    </>
  )
}

export default Player; 

/*
export default function Player() {
  return (
    <div className="player">
      <div className="player__album">
        <span />
        <p>Nothing's playing</p>
      </div>
      <div className="player__controls">
        <FontAwesomeIcon icon={faStepBackward} />
        <FontAwesomeIcon icon={faPlayCircle} />
        <FontAwesomeIcon icon={faStepForward} />
      </div>
      <div className="player__seekbar" />
      <div className="player__actions">
        <FontAwesomeIcon icon={faEllipsisH} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faRandom} />
        <FontAwesomeIcon icon={faRetweet} />
        <FontAwesomeIcon icon={faVolumeDown} />
      </div>
    </div>
  );
}

/*

export default function Player({ accessToken, trackUri }) {
  if (!accessToken) return null
  return (
    <SpotifyPlayer
    token={'BQBekqqU6B7kaOnajm4ytsvyiGpNHGrsjpZbI_aCBAabYEs5uXkp_8OS2FaV1IM00XI6ioYG6Tl1aWrkEshuEUblbMpzbQVKz2AOCu7XVKsLRha7kgWKNxiPkGcE2TGJnl4UTWBitrpmhEVX3FVsT1fKwi5112kT7VwcKZs4XL02oBzURZmRUxF7W-k'}
    showSaveIcon
    uris={trackUri ? [trackUri]: []} />
  )
}

*/

