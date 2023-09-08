import { ComponentOutputterParamOption } from '@figma-export/types';
import { Config } from '@svgr/core';
import { SVGR_COMPONENT_OUT_PUT_PATH } from '../figma.constants';
import {
  getDirName,
  getComponentName,
  getExportTemplate,
  getComponentFilename,
  isFlagsPage,
  getFileDescriptor,
  makeVariableName,
} from '../figma.utils';
import { pascalCase } from '@figma-export/utils';
import { Config as OptimizeOptions } from 'svgo';
import SvgrTemplate from './svgr-template';

interface Options {
  output: string;
  getDirname?: (options: ComponentOutputterParamOption) => string;
  getComponentName?: (options: ComponentOutputterParamOption) => string;
  getComponentFilename?: (options: ComponentOutputterParamOption) => string;
  getFileExtension?: (options: ComponentOutputterParamOption) => string;
  getExportTemplate?: (options: ComponentOutputterParamOption) => string;
  /**
   * SVGR ships with a handful of customizable options, usable in both the CLI and API.
   * https://react-svgr.com/docs/options/
   */
  getSvgrConfig?: (options: ComponentOutputterParamOption) => Config;
}

export const svgrGetComponentName = (options: ComponentOutputterParamOption) => {
  if (isFlagsPage(options)) {
    return getComponentName({
      type: 'exact',
      value: pascalCase(makeVariableName(`${options.basename} Icon`)),
    });
  }

  return getComponentName({
    type: 'category',
    pageName: options.pageName,
    ...getFileDescriptor(options.componentName),
  });
};

export const svgrGetComponentFilename = (options: ComponentOutputterParamOption) => {
  if (isFlagsPage(options)) {
    return getComponentFilename({
      type: 'exact',
      value: pascalCase(makeVariableName(options.basename)),
    });
  }

  return getComponentFilename({
    type: 'category',
    pageName: options.pageName,
    ...getFileDescriptor(options.componentName),
  });
};

export const svgrGetDirName = (options: ComponentOutputterParamOption) => {
  if (isFlagsPage(options)) {
    return getDirName({ type: 'exact', value: 'flags' });
  }
  return getDirName({
    type: 'category',
    pageName: options.pageName,
    ...getFileDescriptor(options.componentName),
  });
};

export const SvgReactOutPutConfig: Options = {
  output: SVGR_COMPONENT_OUT_PUT_PATH,
  getDirname: svgrGetDirName,
  getFileExtension: () => {
    return '.tsx';
  },
  getComponentName: svgrGetComponentName,
  getComponentFilename: svgrGetComponentFilename,
  getExportTemplate: (options) => {
    const reactComponentName = svgrGetComponentName(options);
    const reactComponentFilename = svgrGetComponentFilename(options);
    return getExportTemplate({ reactComponentFilename, reactComponentName });
  },
  getSvgrConfig: (options) => {
    const isSystemPage = options.pageName.toLowerCase().includes('system');
    const svgoConfig: OptimizeOptions = {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
        'removeComments',
        'removeUselessStrokeAndFill',
        // 'removeDimensions',
      ],
    };
    if (isSystemPage) {
      svgoConfig.plugins?.push({
        name: 'removeAttrs',
        params: {
          attrs: 'fill',
        },
      });
    }
    return {
      ref: true,
      svgProps: {
        role: 'img',
      },
      typescript: true,
      svgo: true,
      icon: true,
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
      svgoConfig,

      dimensions: false,
      template: SvgrTemplate,
    };
  },
};
