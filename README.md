# GitHub Search Task

Приложение для поиска репозиториев на GitHub с использованием GitHub API.

## Настройка

### 1. Создание токена GitHub

Для работы с GitHub API необходимо создать Personal Access Token:

1. Перейдите в [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Нажмите "Generate new token (classic)"
3. Выберите необходимые разрешения (для поиска репозиториев достаточно `public_repo`)
4. Скопируйте созданный токен

### 2. Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```env
VITE_GITHUB_API_URL=https://api.github.com
VITE_GITHUB_TOKEN=your_github_personal_access_token_here
```

Замените `your_github_personal_access_token_here` на ваш токен.

### 3. Установка зависимостей

```bash
npm i
```

### 4. Запуск приложения

```bash
npm start
```
