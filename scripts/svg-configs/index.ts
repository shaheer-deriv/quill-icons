import { SVG_OUT_PUT_PATH } from '../figma.constants';
import { ComponentOutputterParamOption } from '@figma-export/types';
import { getDirName, getFileDescriptor, isFlagsPage, makeVariableName } from '../figma.utils';
import { pascalCase } from '@figma-export/utils';

interface Options {
  output: string;
  getDirname?: (options: ComponentOutputterParamOption) => string;
  getBasename?: (options: ComponentOutputterParamOption) => string;
}
export const SvgOutPutConfig: Options = {
  output: SVG_OUT_PUT_PATH,
  getBasename: (options) => {
    let name = options.componentName;
    if (isFlagsPage(options)) {
      name = makeVariableName(options.basename);
    } else {
      const { variant, style } = getFileDescriptor(options.componentName);
      if (style !== undefined && variant !== undefined) {
        name = `${variant}-${style}`;
      }
    }

    return makeVariableName(`${pascalCase(name)}.svg`);
  },
  getDirname: (options) => {
    if (isFlagsPage(options)) {
      return getDirName({ value: 'flags', type: 'exact' });
    }
    const { category, subCategory, variant } = getFileDescriptor(options.componentName);
    return getDirName({
      type: 'category',
      pageName: options.pageName,
      category,
      subCategory,
      variant,
    });
  },
};
