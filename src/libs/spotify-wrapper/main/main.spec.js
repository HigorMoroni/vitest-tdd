import { describe, expect, it } from 'vitest';
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
});