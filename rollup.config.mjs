import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import { readdirSync } from 'fs';
import dts from 'rollup-plugin-dts';

const getComponentsFolders = (entry) => {
  const dirs = readdirSync(entry);
  const dirsWithoutIndex = dirs.filter((name) => name !== 'index.ts');
  return dirsWithoutIndex;
};

const commonPlugins = [
  external(),
  resolve(),
  typescript({
    tsconfig: './tsconfig.build.json',
  }),
];

function component(commonPlugins, folder) {
  return {
    input: `src/react/${folder}/index.ts`,
    output: [
      {
        file: `dist/${folder}/index.js`,
        exports: 'named',
        format: 'esm',
      },
    ],
    plugins: [...commonPlugins],
    external: [/node_modules/, 'react', 'react-dom', 'react/jsx-runtime'],
  };
}

const componentDts = (folder) => {
  return {
    input: `dist/types/react/${folder}/index.d.ts`,
    output: [{ file: `dist/${folder}/index.d.ts`, format: 'esm' }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: './src',
        },
      }),
    ],
  };
};

const componentsFolders = getComponentsFolders('./src/react');

/**
 * @type {import('rollup').RollupOptions[]}
 */
export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'esm',
    },
    plugins: [
      external(),
      resolve(),
      typescript({
        tsconfig: './tsconfig.build.json',
        compilerOptions: {
          declaration: true,
          declarationDir: './dist/types',
        },
      }),
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: './src',
        },
      }),
    ],
  },
  {
    input: 'src/types/index.ts',
    output: [{ file: 'dist/types.d.ts', format: 'esm' }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: './src',
        },
      }),
    ],
  },
  ...componentsFolders.map((folder) => component(commonPlugins, folder)),
  ...componentsFolders.map((folder) => componentDts(folder)),
];
