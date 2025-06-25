import { makeAutoObservable, runInAction } from 'mobx';

import repositoryService from '../api/repository.service';

import { Repository } from './types';

class RepositoryStore {
  public get repositories() {
    return this._repositories;
  }

  public get totalCount() {
    return this._totalCount;
  }

  private _repositories: Repository[] = [];
  private _totalCount: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  async searchRepositories(query: string) {
    if (!query) {
      this._repositories = [];
      this._totalCount = 0;
      return;
    }

    const response = await repositoryService.search(query);

    runInAction(() => {
      this._totalCount = response.total_count;
      this._repositories = response.items;
    });
  }
}

export const repositoryStore = new RepositoryStore();
