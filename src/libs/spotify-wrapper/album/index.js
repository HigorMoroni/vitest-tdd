import spotifyAccessAuth from '../../../auth/spotify-access-auth';

export const getAlbum = id => 
  fetch(`https://api.spotify.com/v1/albums/${id}`, { headers: spotifyAccessAuth })
    .then(data => data.json());

export const getAlbums = ids => 
  fetch(`https://api.spotify.com/v1/albums?ids=${ids}`, { headers: spotifyAccessAuth })
    .then(data => data.json());

export const getAlbumTracks = id => 
  fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, { headers: spotifyAccessAuth })
    .then(data => data.json());