import outPutSvgrComponent from '@figma-export/output-components-as-svgr';
import outPutSvg from '@figma-export/output-components-as-svg';
import { ComponentOutputter, FigmaExportRC } from '@figma-export/types';
import dotenv from 'dotenv';
import outPutStories from './outputters/stories';
import { SvgOutPutConfig } from './svg-configs';
import { IllustrationSvgReactOutPutConfig } from './svgr-configs/illustrations';
import { IllustrationStoriesOptions } from './stories-configs/illustrations';

dotenv.config();

const fileId: string = 'Ue059kUMFtzTSIgpHqLL9H';

const outputters: ComponentOutputter[] = [
  outPutSvg(SvgOutPutConfig),
  outPutSvgrComponent(IllustrationSvgReactOutPutConfig),
  outPutStories(IllustrationStoriesOptions),
];

(module.exports as FigmaExportRC) = {
  commands: [
    [
      'components',
      {
        fileId,
        onlyFromPages: ['illustration'],
        outputters,
      },
    ],
  ],
};
