import { makeAutoObservable, runInAction } from 'mobx';

import repositoryService from '../api/repository.service';

import { Repository } from './types';

class RepositoryStore {
  public get loading() {
    return this._loading;
  }

  public get repositories() {
    return this._repositories;
  }

  public get repositoriesCount() {
    return this._repositories.length;
  }

  private _loading = false;
  private _repositories: Repository[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async searchRepositories(query: string) {
    this._repositories = [];

    if (!query) {
      this._repositories = [];
      return;
    }

    this._loading = true;

    const response = await repositoryService.search(query);

    runInAction(() => {
      this._repositories = response.items;
      this._loading = false;
    });
  }
}

export const repositoryStore = new RepositoryStore();
