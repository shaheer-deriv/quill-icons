import { SVG_OUT_PUT_PATH } from '../utils/figma.constants';
import { ComponentOutputterParamOption } from '@figma-export/types';
import { getDirName, getSvgBaseName } from '../utils/figma.utils';

interface Options {
  output: string;
  getDirname?: (options: ComponentOutputterParamOption) => string;
  getBasename?: (options: ComponentOutputterParamOption) => string;
}
export const SvgOutPutConfig: Options = {
  output: SVG_OUT_PUT_PATH,
  getBasename: getSvgBaseName,
  getDirname: getDirName,
};
