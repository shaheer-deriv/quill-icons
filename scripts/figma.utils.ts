import { pascalCase } from '@figma-export/utils';
import * as FigmaExport from '@figma-export/types';

export const getFileDescriptor = (componentName: string) => {
  const fullName = componentName.split('/').join('_');
  const splits = fullName.split('_');

  const category = splits[0].trim();

  const subCategory = splits[1].trim();

  const variant = splits[2] ? splits[2].trim().replace(/md/g, '') : undefined;

  const style = splits[3] ? splits[3].trim() : undefined;

  return {
    category,
    subCategory,
    variant,
    style,
  };
};

export const upperFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const lowerFirst = (str: string) => str.charAt(0).toLowerCase() + str.slice(1);

interface CategoryTypeOption {
  type: 'category';
  pageName: string;
  category: string;
  subCategory: string;
  variant?: string;
  style?: string;
}

interface ExactTypeOptions {
  type: 'exact';
  value: string;
}

type CustomOptions = CategoryTypeOption | ExactTypeOptions;

export const getDirName = (configs: CustomOptions) => {
  if (configs.type === 'exact') {
    return configs.value;
  } else {
    const { category, variant, pageName } = configs;
    if (variant !== undefined) {
      return `${pageName}/${pascalCase(category)}`;
    }
    return `${pageName}/${pascalCase(category)}`;
  }
};

export const getComponentName = (configs: CustomOptions) => {
  if (configs.type === 'exact') {
    return configs.value;
  } else {
    const { style, variant, category } = configs;
    if (style === undefined) {
      return pascalCase(`${category} ${variant ?? ''} Icon`);
    }
    return pascalCase(`${category} ${variant ?? ''} ${style} Icon`);
  }
};

export const getComponentFilename = (configs: CustomOptions) => {
  if (configs.type === 'exact') {
    return configs.value;
  } else {
    const { style, variant } = configs;

    if (style === undefined) {
      return pascalCase(`${variant ?? ''}`);
    }
    return pascalCase(`${variant ?? ''} ${style}`);
  }
};

export const getExportTemplate = ({
  reactComponentName,
  reactComponentFilename,
}: {
  reactComponentName: string;
  reactComponentFilename: string;
}) => {
  return `export { default as ${reactComponentName} } from './${reactComponentFilename}';`;
};

export const getSvgStoreOriginalPath = (pageName: string) => {
  return `${pageName}.svg`;
};

export const getSvgStoreFinalPath = (pageName: string) => {
  return 'icons.svg';
};

export const isFlagsPage = (options: FigmaExport.ComponentOutputterParamOption) => {
  if (options.pageName.toLowerCase().includes('flag')) {
    return true;
  }
  return false;
};

export const makeVariableName = (name: string) => {
  if (/^\d/.test(name)) {
    return name.slice(1);
  }
  return name;
};
