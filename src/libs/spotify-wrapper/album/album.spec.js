// getAlbum
// getAlbumTracks

import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { getAlbum, getAlbums, getAlbumTracks } from './index';

import { returnsPromise } from '../../../utils/mockImplementations';
import spotifyAccessAuth from '../../../auth/spotify-access-auth';

describe('Album', () => {
  describe('Smoke Tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('Methods', () => {
    const fetchOptions = { headers: spotifyAccessAuth };

    beforeEach(() => {
      global.fetch = vi.fn().mockImplementation(returnsPromise);
    });
  
    afterEach(() => fetch.mockRestore());

    describe('Get Album Method', () => {
      it('should call fetch method', () => {
        getAlbum();
        expect(fetch).toHaveBeenCalledTimes(1);
      });

      it('should call fetch with the correct URL', () => {
        getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
        expect(fetch).toHaveBeenCalledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy', fetchOptions);

        getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
        expect(fetch).toHaveBeenCalledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk', fetchOptions);
      });

      it('should return the correct data from Promise', async () => {
        const album = await getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
        expect(album).toStrictEqual({ data: 'data' });
      });
    });

    describe('Get Albums Method', () => {
      const albunsIdArray = ['382ObEPsp2rxGrnsizN5TX', '1A2GTWGtFfWp7KSQTwWOyo', '2noRn2Aes5aoNVsU6iWThc'];

      it('should call fetch method', () => {
        getAlbums();
        expect(fetch).toHaveBeenCalledTimes(1);
      });

      it('should call fetch with the correct URL', () => {
        getAlbums(albunsIdArray);
        expect(fetch).toHaveBeenCalledWith(
          'https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc',
          fetchOptions
        );
      });

      it('should return the correct data from Promise', async () => {
        const album = await getAlbums(['382ObEPsp2rxGrnsizN5TX', '1A2GTWGtFfWp7KSQTwWOyo', '2noRn2Aes5aoNVsU6iWThc']);
        expect(album).toStrictEqual({ data: 'data' });
      });
    });

    describe('Get Album Track Method', () => {
      it('should call fetch method', () => {
        getAlbumTracks();
        expect(fetch).toHaveBeenCalledTimes(1);
      });

      it('should call fetch with the correct URL', () => {
        getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
        expect(fetch).toHaveBeenCalledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks', fetchOptions);

        getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTk');
        expect(fetch).toHaveBeenCalledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk/tracks', fetchOptions);
      });

      it('should return the correct data from Promise', async () => {
        const album = await getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
        expect(album).toStrictEqual({ data: 'data' });
      });
    });
  });
});