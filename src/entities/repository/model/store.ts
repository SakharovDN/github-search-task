import { makeAutoObservable, runInAction } from 'mobx';

import repositoryService from '../api/repository.service';

import { Repository } from './types';

class RepositoryStore {
  public get error() {
    return this._error;
  }

  public get favoriteRepositories() {
    return this._repositories.filter((repository) => repository.isFavorite);
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

  private _error: string | null = null;
  private _loading = false;
  private _repositories: Repository[] = [];

  constructor() {
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

  public toggleFavorite(id: Repository['id']) {
    const repository = this._repositories.find((repository) => repository.id === id);

    if (!repository) return;

    repository.isFavorite = !repository.isFavorite;
  }
}

export const repositoryStore = new RepositoryStore();
