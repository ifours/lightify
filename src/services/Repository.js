export class Repository {
  async authorize() {
    const CLIENT_ID = '82b3d439439646e9bc4a7ad7de9aac9f';
    const REDIRECT_URI = encodeURIComponent('http://localhost:3000/callback');
    const SCOPE = encodeURIComponent('user-read-private user-read-email');
    const RESPONSE_TYPE = 'token';

    window.location.href = 'https://accounts.spotify.com/authorize?' +
      `client_id=${CLIENT_ID}&` +
      `redirect_uri=${REDIRECT_URI}&` +
      `scope=${SCOPE}&` +
      'show_dialog=true&' +
      `response_type=${RESPONSE_TYPE}`;
  }

  async getFeaturedPlaylists(token) {
    const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return await response.json();
  }

  async fetchPlaylist(userId, playlistId, token) {
    const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return await response.json();
  }

  async fetchPlaylistTracks(href, token) {
    const response = await fetch(href, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return await response.json();
  }
}

export default new Repository();
