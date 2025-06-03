import TypeScriptESLint from 'typescript-eslint';

import PluginReact from 'eslint-plugin-react';
import PluginUnicorn from 'eslint-plugin-unicorn';
import PluginStylistic from '@stylistic/eslint-plugin';
import PluginReactHooks from 'eslint-plugin-react-hooks';
import PluginTailwindCSS from 'eslint-plugin-tailwindcss';

import { defineConfig } from 'eslint/config';

export default defineConfig(
    [
        {
            ignores:
            [
                'Build/**',
                'node_modules/**'
            ],
            files:
            [
                '**/*.{js,jsx,ts,tsx}'
            ],
            plugins:
            {
                react: PluginReact,
                unicorn: PluginUnicorn,
                '@stylistic': PluginStylistic,
                tailwindcss: PluginTailwindCSS,
                'react-hooks': PluginReactHooks,
                '@typescript-eslint': TypeScriptESLint.plugin
            },
            languageOptions:
            {
                sourceType: 'module',
                ecmaVersion: 'latest',
                parser: TypeScriptESLint.parser,
                parserOptions:
                {
                    projectService:
                    {
                        allowDefaultProject: [ '*.js' ]
                    },
                    ecmaFeatures:
                    {
                        jsx: true
                    }
                }
            },
            extends:
            [
                '@typescript-eslint/all'
            ],
            settings:
            {
                react:
                {
                    version: 'detect'
                }
            },
            rules:
            {
                ...PluginReact.configs.all.rules,
                ...PluginUnicorn.configs.all.rules,
                ...PluginStylistic.configs.all.rules,
                ...TypeScriptESLint.configs.all.rules,
                ...PluginReactHooks.configs.recommended.rules,
                ...PluginTailwindCSS.configs.recommended.rules,

                '@typescript-eslint/no-magic-numbers': 0,
                '@typescript-eslint/naming-convention': 0,
                '@typescript-eslint/no-unsafe-assignment': 0,

                'unicorn/empty-brace-spaces': 0,

                '@stylistic/linebreak-style': 0,

                '@stylistic/indent': [ 2, 4 ],
                '@stylistic/semi': [ 2, 'always' ],
                '@stylistic/quotes': [ 2, 'single' ],
                '@stylistic/padded-blocks': [ 2, 'never' ],
                '@stylistic/quote-props': [ 2, 'as-needed' ],
                '@stylistic/object-curly-spacing': [ 2, 'always' ],
                '@stylistic/array-bracket-spacing': [ 2, 'always' ],
                '@stylistic/template-curly-spacing': [ 2, 'always' ],
                '@stylistic/array-element-newline': [ 2, 'consistent' ],
                '@stylistic/array-bracket-newline': [ 2, 'consistent' ],
                '@stylistic/function-paren-newline': [ 2, 'consistent' ],
                '@stylistic/brace-style': [ 2, 'allman', { allowSingleLine: false } ],
                '@stylistic/object-curly-newline': [ 2, { multiline: true, consistent: true } ],
                '@stylistic/object-property-newline': [ 2, { allowAllPropertiesOnSameLine: true } ]
            }
        }
    ]
);
