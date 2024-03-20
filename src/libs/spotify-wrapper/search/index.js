import { fetchDefaultOptions } from '../configs';
import responseToJson from '../../../utils/responseToJson';

const API_URL = import.meta.env.VITE_SPOTIFY_API_URL;

export const search = (query, type) => {
  return fetch(`${API_URL}/search?q=${query}&type=${type}`, fetchDefaultOptions)
    .then(responseToJson);
};
  
    
export const searchAlbums = (query) => search(query, 'album');
export const searchArtists = (query) => search(query, 'artist');
export const searchTracks = (query) => search(query, 'track');
export const searchPlaylists = (query) => search(query, 'playlist');