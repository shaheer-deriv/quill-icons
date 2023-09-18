import { pascalCase } from '@figma-export/utils';
import * as FigmaExport from '@figma-export/types';

export const getFileDescriptor = (options: FigmaExport.ComponentOutputterParamOption) => {
  const { componentName } = options;
  let separator = '/';
  if (isFlagsPage(options)) {
    separator = '-';
  }
  const splits = componentName.split(separator);

  const category = splits[0].trim().replace(/-md/g, '');

  const subCategory = splits[1].trim().replace(/-md/g, '');

  const variant = splits[2] ? splits[2].trim().replace(/-md/g, '') : undefined;

  const style = splits[3] ? splits[3].trim().replace(/-md/g, '') : undefined;

  const type = splits[4] ? splits[4].trim().replace(/-md/g, '') : undefined;

  return {
    category,
    subCategory,
    variant,
    style,
    type,
  };
};

export const upperFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const lowerFirst = (str: string) => str.charAt(0).toLowerCase() + str.slice(1);

export const isMd = (value?: string) => {
  return value?.toLowerCase() === 'md';
};
export const getVarNameByFileDC = (fileDescriptor: ReturnType<typeof getFileDescriptor>) => {
  const names: Array<string | undefined> = [];
  const fileDescriptorKeys = Object.keys(fileDescriptor) as Array<keyof typeof fileDescriptor>;
  fileDescriptorKeys.forEach((key) => {
    if (fileDescriptor[key] !== undefined && !isMd(fileDescriptor[key])) {
      names.push(fileDescriptor[key]);
    }
  });

  const joinedNames = names.join('_');
  const variableName = makeVariableName(joinedNames);
  return variableName;
};

export const getSvgBaseName = (options: FigmaExport.ComponentOutputterParamOption) => {
  const fileDescriptor = getFileDescriptor(options);
  const variableName = getVarNameByFileDC(fileDescriptor);
  return `${pascalCase(variableName)}.svg`;
};

export const getEs6VariableName = (options: FigmaExport.ComponentOutputterParamOption) => {
  const fileDescriptor = getFileDescriptor(options);
  const variableName = getVarNameByFileDC(fileDescriptor);
  return `Svg${pascalCase(variableName)}`;
};
export const getDirName = (options: FigmaExport.ComponentOutputterParamOption) => {
  const { category } = getFileDescriptor(options);
  return `${pascalCase(category)}`;
};

export const getComponentName = (options: FigmaExport.ComponentOutputterParamOption) => {
  const fileDescriptor = getFileDescriptor(options);
  const variableName = getVarNameByFileDC(fileDescriptor);
  return `${pascalCase(variableName)}Icon`;
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
