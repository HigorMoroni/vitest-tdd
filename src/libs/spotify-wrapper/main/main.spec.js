import {
  describe,
  expect,
  it,
  vi,
  beforeEach,
  afterEach
} from 'vitest';
import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from './index';

import { returnsPromise } from '../../../utils/mockImplementations';
import spotifyAccessAuth from '../../../auth/spotify-access-auth';

describe('Spotify Wrapper', () => {
  describe('Smoke Tests', () => {
    // Search All
    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    // Search Album
    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    // Search Artist
    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    // Search Track
    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });
    
    // Search Playlist
    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Search Methods', () => {
    beforeEach(() => {
      global.fetch = vi.fn().mockImplementation(returnsPromise);
    });
  
    afterEach(() => fetch.mockRestore());
  
    describe('Generic Search', () => {
      it('should call fetch function', () => {
        search();
        expect(fetch).toHaveBeenCalledTimes(1);
      });
  
      describe('should receive the correct URL to fetch', () => {
        it('passing one type', () => {
          search('Alok', 'artist');
          expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Alok&type=artist');
    
          search('Elepunk', 'album');
          expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Alok&type=artist'); // Testando que o toBeCalledWith não se refere a ultima chamada!
          expect(fetch).toHaveBeenLastCalledWith('https://api.spotify.com/v1/search?q=Elepunk&type=album');
        });
  
        it('passing two or more types', () => {
          search('Metallica', ['artist', 'album', 'playlist']);
          expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Metallica&type=artist,album,playlist');
        });
      });
  
      it('should return the JSON Fata from the', async () => {
        // TODO - class  95
  
        const artist = await search('Alok', 'artist');
        expect(artist).toStrictEqual({ data: 'data' });
      });
    });

    describe('Search Artists', () => {
      it('should call fetch function', () => {
        searchArtists('Anitta');
        
        expect(fetch).toHaveBeenCalledTimes(1);
      });

      it('should call fetch with the correct URL', () => {
        searchArtists('Projota');
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Projota&type=artist');

        searchArtists('Muse');
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
      });
    });

    describe('Search Albums', () => {
      it('should call fetch function', () => {
        searchAlbums('Encontros');
        
        expect(fetch).toHaveBeenCalledTimes(1);
      });

      it('should call fetch with the correct URL', () => {
        searchAlbums('SOUR');
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=SOUR&type=album');

        searchAlbums('PIRATA');
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=PIRATA&type=album');
      });
    });

    describe('Search Tracks', () => {
      it('should call fetch function', () => {
        searchTracks('traitor');
        
        expect(fetch).toHaveBeenCalledTimes(1);
      });

      it('should call fetch with the correct URL', () => {
        searchTracks('Leão');
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Leão&type=track');

        searchTracks('Medicina');
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Medicina&type=track');
      });
    });

    describe('Search Playlists', () => {
      it('should call fetch function', () => {
        searchPlaylists('2024');
        
        expect(fetch).toHaveBeenCalledTimes(1);
      });

      it('should call fetch with the correct URL', () => {
        searchPlaylists('Melhores');
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Melhores&type=playlist');

        searchPlaylists('Pagodão');
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Pagodão&type=playlist');
      });
    });
  });

});