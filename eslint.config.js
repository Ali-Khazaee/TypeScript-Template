import PluginReact from 'eslint-plugin-react';
import PluginUnicorn from 'eslint-plugin-unicorn';
import PluginStylistic from '@stylistic/eslint-plugin';
import TypeScriptParser from '@typescript-eslint/parser';
import PluginReactHooks from 'eslint-plugin-react-hooks';
import PluginTailwindCSS from 'eslint-plugin-tailwindcss';
import PluginTypeScript from '@typescript-eslint/eslint-plugin';

import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    {
        files:
        [
            '*.js',
            '*.ts',
            '*.tsx'
        ],
        languageOptions:
        {
            parser: TypeScriptParser,
            parserOptions:
            {
                sourceType: 'module',
                ecmaVersion: 'latest',
                ecmaFeatures:
                {
                    jsx: true
                }
            }
        },
        plugins:
        {
            react: PluginReact,
            unicorn: PluginUnicorn,
            '@stylistic': PluginStylistic,
            tailwindcss: PluginTailwindCSS,
            'react-hooks': PluginReactHooks,
            '@typescript-eslint': PluginTypeScript
        },
        settings:
        {
            react:
            {
                version: 'detect'
            }
        },
        rules:
        {
            ...PluginUnicorn.configs.all.rules,
            ...PluginStylistic.configs.all.rules,
            ...PluginReact.configs.flat['all'].rules,
            ...PluginTailwindCSS.configs['recommended'].rules,
            ...PluginReactHooks.configs['recommended-latest'].rules,

            '@stylistic/linebreak-style': 0,

            '@stylistic/semi': [ 2, 'always' ],
            '@stylistic/quotes': [ 2, 'single' ],
            '@stylistic/padded-blocks': [ 2, 'never' ],
            '@stylistic/quote-props': [ 2, 'as-needed' ],
            '@stylistic/object-curly-spacing': [ 2, 'always' ],
            '@stylistic/array-bracket-spacing': [ 2, 'always' ],
            '@stylistic/template-curly-spacing': [ 2, 'always' ],
            '@stylistic/array-element-newline': [ 2, 'consistent' ],
            '@stylistic/array-bracket-newline': [ 2, 'consistent' ],
            '@stylistic/space-before-function-paren': [ 2, 'never' ],
            '@stylistic/multiline-ternary': [ 2, 'always-multiline' ],
            '@stylistic/nonblock-statement-body-position': [ 2, 'below' ],
            '@stylistic/function-call-argument-newline': [ 2, 'consistent' ],
            '@stylistic/brace-style': [ 2, 'allman', { allowSingleLine: false } ],
            '@stylistic/no-multiple-empty-lines': [ 2, { max: 1, maxEOF: 0, maxBOF: 0 } ],
            '@stylistic/object-property-newline': [ 2, { allowAllPropertiesOnSameLine: true } ]
        }
    },

    globalIgnores([ 'Build/*', 'node_modules/*' ])
]);
