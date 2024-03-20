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
} from './main';

import { returnsPromise } from '@/utils/mockImplementations';

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

  describe('Generic Search', () => {
    beforeEach(() => {
      global.fetch = vi.fn().mockImplementation(returnsPromise);
    });

    afterEach(() => fetch.mockRestore());

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
  });
});