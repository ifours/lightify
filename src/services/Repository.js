import resources from '__mocks__/resources';
import featuredPlaylists from '__mocks__/featured-playlists';
import newReleases from '__mocks__/new-releases';

export class Repository {
  getResources() {
    return Promise.resolve(resources);
  }

  getFeaturedPlaylists() {
    return Promise.resolve(featuredPlaylists);
  }

  getNewReleases() {
    return Promise.resolve(newReleases);
  }
}

export default new Repository();
