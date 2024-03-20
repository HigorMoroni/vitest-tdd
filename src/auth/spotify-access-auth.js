import { Buffer } from 'buffer';

const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

const spotifyAccessToken = fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  body: new URLSearchParams({ 'grant_type': 'client_credentials' }),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
  },
}).then(data => data.json()).then(response => response.access_token);

export default { Authorization: 'Bearer ' + await spotifyAccessToken };