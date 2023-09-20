import outPutEs6 from '@figma-export/output-components-as-es6';
import outPutSvg from '@figma-export/output-components-as-svg';
import outPutSvgrComponent from '@figma-export/output-components-as-svgr';
import outPutSvgStore from '@figma-export/output-components-as-svgstore';
import { ComponentFilter, ComponentOutputter, FigmaExportRC } from '@figma-export/types';
import dotenv from 'dotenv';
import outPutStories from './outputters/stories';
import { SvgStoreConfig } from './svg-store-configs/outputters.config';
import renameOutPut from './outputters/rename';
import { SvgOutPutConfig } from './svg-configs';
import { ESOutPutConfig, RenameEsConfig } from './es-configs';
import { IconSvgReactOutPutConfig } from './svgr-configs/icons';
import { IconStoriesOptions } from './stories-configs/icons';

dotenv.config();

const fileId: string = 'c24yCkzAgS5Fv1x0QuEYxq';

const outputters: ComponentOutputter[] = [
  outPutSvg(SvgOutPutConfig),
  outPutEs6(ESOutPutConfig),
  renameOutPut(RenameEsConfig),
  outPutSvgrComponent(IconSvgReactOutPutConfig),
  outPutStories(IconStoriesOptions),
  outPutSvgStore(SvgStoreConfig),
];

const filterComponent: ComponentFilter = (component) => {
  if (component.name.includes('flag-') && !component.name.includes('/')) {
    return true;
  }
  if (component.name.includes('partnership-md') || component.name.includes('sign-up-md')) {
    return false;
  }
  const splits = component.name.split('/');
  if (!splits[1].includes('md')) {
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
        onlyFromPages: ['Social', 'Flags', 'System', 'Illustrative'],
        outputters,
      },
    ],
  ],
};
