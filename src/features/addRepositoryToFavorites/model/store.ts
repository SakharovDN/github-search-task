import { makeAutoObservable } from 'mobx';
import { computedFn } from 'mobx-utils';

import { Repository, repositoryStore, RepositoryStore } from '@/entities/repository';

class FavoritesStore {
  private _repositoriesStore: RepositoryStore;
  private _favoriteIds: Set<Repository['id']>;

  public get favoriteRepositories() {
    return this._repositoriesStore.repositories.filter((repository) => this.isFavorite(repository.id));
  }

  constructor(repositoriesStore: RepositoryStore) {
    this._repositoriesStore = repositoriesStore;
    this._favoriteIds = new Set(JSON.parse(localStorage.getItem('favoriteIds') || '[]'));
    makeAutoObservable(this);
  }

  public isFavorite = computedFn((id: Repository['id']) => this._favoriteIds.has(id));

  public toggleFavorite(id: Repository['id']) {
    if (this._favoriteIds.has(id)) {
      this._favoriteIds.delete(id);
    } else {
      this._favoriteIds.add(id);
    }

    localStorage.setItem('favoriteIds', JSON.stringify(Array.from(this._favoriteIds)));
  }
}

export const favoritesStore = new FavoritesStore(repositoryStore);
