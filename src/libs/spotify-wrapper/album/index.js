import { fetchDefaultOptions } from '../configs';
import responseToJson from '../../../utils/responseToJson';

const API_URL = import.meta.env.VITE_SPOTIFY_API_URL;

export const getAlbum = id => {
  return fetch(`${API_URL}/albums/${id}`, fetchDefaultOptions).then(responseToJson);
};

export const getAlbums = ids => {
  return fetch(`${API_URL}/albums?ids=${ids}`, fetchDefaultOptions).then(responseToJson);
};
  
export const getAlbumTracks = id => {
  return fetch(`${API_URL}/albums/${id}/tracks`, fetchDefaultOptions).then(responseToJson);
};