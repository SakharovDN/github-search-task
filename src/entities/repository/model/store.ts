import { makeAutoObservable, runInAction } from 'mobx';

import repositoryService from '../api/repository.service';

import { Repository, RepositorySorting } from './types';

class RepositoryStore {
  public get loading() {
    return this._loading;
  }

  public get repositories() {
    if (this._sorting) {
      return this.getSortedRepositories();
    }

    return this._repositories;
  }

  public get repositoriesCount() {
    return this._repositories.length;
  }

  public get sorting() {
    return this._sorting;
  }

  public set sorting(value: RepositorySorting | null) {
    this._sorting = value;
  }

  private _loading = false;
  private _repositories: Repository[] = [];
  private _sorting: RepositorySorting | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public async searchRepositories(query: string) {
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

  public toggleFavorite(id: Repository['id']) {
    const repository = this._repositories.find((repository) => repository.id === id);

    if (!repository) return;

    repository.isFavorite = !repository.isFavorite;
  }

  private getSortedRepositories() {
    if (this._sorting === 'new') {
      return this._repositories
        .slice()
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }

    return this._repositories.slice().sort((a, b) => b.stargazers_count - a.stargazers_count);
  }
}

export const repositoryStore = new RepositoryStore();
