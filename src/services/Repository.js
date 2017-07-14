const CLIENT_ID = '82b3d439439646e9bc4a7ad7de9aac9f';
const REDIRECT_URI = encodeURIComponent('http://localhost:3000/callback');
const SCOPE = encodeURIComponent('user-read-private user-read-email');
const RESPONSE_TYPE = 'token';

const fetch = async (url, token, options = {}) => {
  const { headers, ...rest } = options;
  const response = await window.fetch(url, {
    ...rest,
    headers: {
      ...headers,
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();

  if (data.error) throw data.error;

  return data;
}

const repository = {
  authorize() {
    window.location.href = 'https://accounts.spotify.com/authorize?' +
      `client_id=${CLIENT_ID}&` +
      `redirect_uri=${REDIRECT_URI}&` +
      `scope=${SCOPE}&` +
      'show_dialog=true&' +
      `response_type=${RESPONSE_TYPE}`;
  },

  getFeaturedPlaylists(token) {
    return fetch('https://api.spotify.com/v1/browse/featured-playlists', token);
  },

  fetchPlaylist(userId, playlistId, token) {
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}`, token);
  },

  fetchPlaylistTracks(href, token) {
    return fetch(href, token);
  }
}

export default repository;
