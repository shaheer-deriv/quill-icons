import { ComponentOutputterParamOption } from '@figma-export/types';
import { DATA_URL_ES6_OUT_PUT_PATH, ES_OUT_PUT_PATH } from '../figma.constants';
import { pascalCase } from '@figma-export/utils';
import { getComponentName, getFileDescriptor, isFlagsPage, makeVariableName } from '../figma.utils';

interface Options {
  output: string;
  useBase64?: boolean;
  useDataUrl?: boolean;
  getVariableName?: (options: ComponentOutputterParamOption) => string;
}

export const getSvgEs6VariableName = (options: ComponentOutputterParamOption) => {
  if (isFlagsPage(options)) {
    const name = makeVariableName(options.basename);
    return getComponentName({ type: 'exact', value: pascalCase(`Svg/${name} Icon`) });
  }

  const componentName = getComponentName({
    type: 'category',
    pageName: options.pageName,
    ...getFileDescriptor(options.componentName),
  });
  return pascalCase(`Svg/${componentName}`);
};

export const ESOutPutConfig: Options = {
  output: DATA_URL_ES6_OUT_PUT_PATH,
  useDataUrl: true,
  getVariableName: getSvgEs6VariableName,
};

const getESOriginalPath = (pageName: string) => {
  return `${pageName}.js`;
};

const getESFinalPath = (pageName: string) => {
  return 'index.ts';
};

export const RenameEsConfig = {
  outPutPath: ES_OUT_PUT_PATH,
  getOriginalPath: getESOriginalPath,
  getFinalPath: getESFinalPath,
};
