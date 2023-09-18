import outPutEs6 from '@figma-export/output-components-as-es6';
import outPutSvg from '@figma-export/output-components-as-svg';
import outPutSvgrComponent from '@figma-export/output-components-as-svgr';
import outPutSvgStore from '@figma-export/output-components-as-svgstore';
import { ComponentOutputter, FigmaExportRC } from '@figma-export/types';
import dotenv from 'dotenv';
import outPutStories from './outputters/stories';
import { SvgStoreConfig } from './svg-store-configs/outputters.config';
import renameOutPut from './outputters/rename';
import { SvgOutPutConfig } from './svg-configs';
import { ESOutPutConfig, RenameEsConfig } from './es-configs';
import { LogosSvgReactOutPutConfig } from './svgr-configs/logos';
import { LogoStoriesOptions } from './stories-configs/logos';

dotenv.config();

const fileId: string = 'ZGR1ou2d6WceOfunr2T97G';

const outputters: ComponentOutputter[] = [
  outPutSvg(SvgOutPutConfig),
  outPutEs6(ESOutPutConfig),
  renameOutPut(RenameEsConfig),
  outPutSvgrComponent(LogosSvgReactOutPutConfig),
  outPutStories(LogoStoriesOptions),
  outPutSvgStore(SvgStoreConfig),
];

(module.exports as FigmaExportRC) = {
  commands: [
    [
      'components',
      {
        fileId,
        onlyFromPages: [
          'Brands',
          'Sub-brands',
          'Deriv products',
          "Partner's products",
          'Payment methods',
        ],
        outputters,
      },
    ],
  ],
};
