import resources from '__mocks__/resources';

export class Repository {
  getResources() {
    return Promise.resolve(resources);
  }
}

export default new Repository();
