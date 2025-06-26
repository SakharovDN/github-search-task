import { makeAutoObservable, runInAction } from 'mobx';

import repositoryService from '../api/repository.service';

import { Repository } from './types';

export class RepositoryStore {
  public get error() {
    return this._error;
  }

  public get loading() {
    return this._loading;
  }

  public get repositories() {
    return this._repositories;
  }

  public get repositoriesCount() {
    return this._repositories.length;
  }

  private _error: string | null;

  private _loading: boolean;

  private _repositories: Repository[];

  constructor() {
    this._repositories = [];
    this._error = null;
    this._loading = false;
    makeAutoObservable(this);
  }

  public getRepositoryById(id: Repository['id']): Repository | undefined {
    return this._repositories.find((repository) => repository.id === id);
  }

  public async searchRepositories(query: string) {
    this._repositories = [];
    this._error = null;

    if (!query) {
      this._repositories = [];
      return;
    }

    this._loading = true;

    try {
      const response = await repositoryService.search(query);

      runInAction(() => {
        this._repositories = response.items;
      });
    } catch (error) {
      runInAction(() => {
        this._error = error instanceof Error ? error.message : 'Произошла ошибка при поиске репозиториев';
      });
    } finally {
      runInAction(() => {
        this._loading = false;
      });
    }
  }
}

export const repositoryStore = new RepositoryStore();
