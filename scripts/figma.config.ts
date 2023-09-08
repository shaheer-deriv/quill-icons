import outPutEs6 from '@figma-export/output-components-as-es6';
import outPutSvg from '@figma-export/output-components-as-svg';
import outPutSvgrComponent from '@figma-export/output-components-as-svgr';
import outPutSvgStore from '@figma-export/output-components-as-svgstore';
import { ComponentFilter, ComponentOutputter, FigmaExportRC } from '@figma-export/types';
import dotenv from 'dotenv';
import outPutStories from './stories-configs/output.stories';
import { RenameSvgStoreConfig, SvgStoreConfig } from './outputters.config';
import renameOutPut from './rename.output';
import { getFileDescriptor } from './figma.utils';
import { SvgOutPutConfig } from './svg-configs';
import { ESOutPutConfig, RenameEsConfig } from './es-configs';
import { SvgReactOutPutConfig } from './svgr-configs';

dotenv.config();

const fileId: string = process.env.FILE_ID ?? '';

const outputters: ComponentOutputter[] = [
  outPutSvg(SvgOutPutConfig),
  outPutEs6(ESOutPutConfig),
  outPutSvgrComponent(SvgReactOutPutConfig),
  renameOutPut(RenameEsConfig),
  outPutStories(),
  outPutSvgStore(SvgStoreConfig),
  renameOutPut(RenameSvgStoreConfig),
];

const filterComponent: ComponentFilter = (component) => {
  if (component.name.includes('flag-') && !component.name.includes('/')) {
    return true;
  }
  const desc = getFileDescriptor(component.name);
  if (!desc.subCategory.includes('md')) {
    return false;
  }
  return true;
};

(module.exports as FigmaExportRC) = {
  commands: [
    [
      'components',
      {
        fileId,
        filterComponent,
        onlyFromPages: ['Social', 'Flags', 'System'],
        outputters,
      },
    ],
  ],
};
