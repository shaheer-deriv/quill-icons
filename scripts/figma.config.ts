import outPutSvgrComponent from '@figma-export/output-components-as-svgr';
import { ComponentFilter, ComponentOutputter, FigmaExportRC } from '@figma-export/types';
import dotenv from 'dotenv';
import outPutStories from './outputters/stories';
import { IconSvgReactOutPutConfig } from './svgr-configs/icons';
import { IconStoriesOptions } from './stories-configs/icons';

dotenv.config();

const fileId: string = 'c24yCkzAgS5Fv1x0QuEYxq';

const outputters: ComponentOutputter[] = [
  outPutSvgrComponent(IconSvgReactOutPutConfig),
  outPutStories(IconStoriesOptions),
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
