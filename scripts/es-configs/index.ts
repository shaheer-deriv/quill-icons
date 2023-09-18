import { ComponentOutputterParamOption } from '@figma-export/types';
import { DATA_URL_ES6_OUT_PUT_PATH, ES_OUT_PUT_PATH } from '../utils/figma.constants';
import { getEs6VariableName } from '../utils/figma.utils';

interface Options {
  output: string;
  useBase64?: boolean;
  useDataUrl?: boolean;
  getVariableName?: (options: ComponentOutputterParamOption) => string;
}

export const ESOutPutConfig: Options = {
  output: DATA_URL_ES6_OUT_PUT_PATH,
  useDataUrl: true,
  getVariableName: getEs6VariableName,
};

const getESOriginalPath = (pageName: string) => {
  return `${pageName}.js`;
};

const getESFinalPath = (pageName: string) => {
  return `${pageName}.ts`;
};

export const RenameEsConfig = {
  outPutPath: ES_OUT_PUT_PATH,
  getOriginalPath: getESOriginalPath,
  getFinalPath: getESFinalPath,
};
