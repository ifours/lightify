import resources from '__mocks__/resources';

export class Repository {
  async authorize() {
    const CLIENT_ID = '82b3d439439646e9bc4a7ad7de9aac9f';
    const REDIRECT_URI = encodeURIComponent('http://localhost:3000/callback');
    const SCOPE = encodeURIComponent('user-read-private user-read-email ');
    const RESPONSE_TYPE = 'token';

    window.location = 'https://accounts.spotify.com/authorize?' +
      `client_id=${CLIENT_ID}&` +
      `redirect_uri=${REDIRECT_URI}&` +
      `scope=${SCOPE}&` +
      'show_dialog=true&' +
      `response_type=${RESPONSE_TYPE}`;
  }

  getResources() {
    return Promise.resolve(resources);
  }

  async getFeaturedPlaylists(token) {
    const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return await response.json();
  }

  async getNewReleases(token) {
    const response = await fetch('https://api.spotify.com/v1/browse/new-releases', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return await response.json();
  }
}

export default new Repository();
