import pluginJs from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: { globals: globals.browser },
    linterOptions: { reportUnusedDisableDirectives: 'error' },
    settings: { react: { version: 'detect' } },
  },
  pluginJs.configs.recommended,
  // typescript-eslint
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  // eslint-plugin-react
  pluginReact.configs.flat.recommended,
  { rules: { 'react/react-in-jsx-scope': 'off', 'react/self-closing-comp': 'error' } },
  eslintPluginPrettierRecommended,
  // eslint-plugin-perfectionist
  perfectionist.configs['recommended-natural'],
  {
    rules: {
      'perfectionist/sort-enums': 'off',
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-classes': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'react',
            'type',
            'builtin',
            'external',

            'shared',
            'entities',
            'features',
            'widgets',
            'pages',
            'app',
            'src',

            ['parent-type', 'parent'],
            ['sibling-type', 'sibling'],
            ['index-type', 'index'],
            'object',
            'style',
            'unknown',
          ],
          customGroups: {
            value: {
              react: ['^react$', '^react-.+'],
              shared: ['^@/shared.+'],
              entities: ['^@/entities.+'],
              features: ['^@/features.+'],
              widgets: ['^@/widgets.+'],
              pages: ['^@/pages.+'],
              app: ['^@/app.+'],
              src: ['^@/src.+'],
            },
            type: { react: ['^react$', '^react-.+'] },
          },
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'natural',
          groups: ['main', 'styles', 'strings', 'multiline', 'unknown', 'shorthand', 'callback'],
          customGroups: {
            main: ['key', 'id$', 'ref'],
            styles: ['.*[sS]tyle$', '.*[cC]lass[nN]ame'],
            strings: ['title', 'name', 'label', 'placeholder'],
            callback: '^on.+',
          },
        },
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          type: 'line-length',
          partitionByNewLine: true,
          groups: [
            'required-index-signature',
            'top',
            'required-property',
            'required-method',
            'unknown',
            'optional-multiline-member',
          ],
          customGroups: [
            {
              groupName: 'top',
              selector: 'property',
              elementNamePattern: '^(?:id|key|name|title)$',
              modifiers: ['required'],
            },
          ],
        },
      ],
      'perfectionist/sort-union-types': [
        'error',
        {
          groups: [
            'named',
            ['intersection', 'union'],
            'operator',
            'object',
            'tuple',
            'function',
            'conditional',
            'import',
            'literal',
            'unknown',
            'keyword',
            'nullish',
          ],
        },
      ],
    },
  },
];
