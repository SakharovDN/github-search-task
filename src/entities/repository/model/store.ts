import { makeAutoObservable, runInAction } from 'mobx';
import { computedFn } from 'mobx-utils';

import repositoryService from '../api/repository.service';

import { Repository } from './types';

class RepositoryStore {
  private _favoriteIds: Set<Repository['id']>;

  public isFavorite = computedFn((id: Repository['id']) => this._favoriteIds.has(id));

  public get error() {
    return this._error;
  }

  public get favoriteRepositories() {
    return this._repositories.filter((repository) => this.isFavorite(repository.id));
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
    this._favoriteIds = new Set(JSON.parse(localStorage.getItem('favoriteIds') || '[]'));
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

  public toggleFavorite(id: Repository['id']) {
    if (this._favoriteIds.has(id)) {
      this._favoriteIds.delete(id);
    } else {
      this._favoriteIds.add(id);
    }

    localStorage.setItem('favoriteIds', JSON.stringify(Array.from(this._favoriteIds)));
  }
}

export const repositoryStore = new RepositoryStore();
