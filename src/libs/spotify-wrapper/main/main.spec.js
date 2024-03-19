import { describe, expect, it, vi } from 'vitest';
import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from './main';

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
    it('should call fetch function', () => {
      global.fetch = vi.fn();
      search();

      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should receive the correct url to fetch', () => {
      search('Alok', 'artist');

      expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Alok&type=artist');


      search('Elepunk', 'album');

      expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=Elepunk&type=album');

    });
  });
});