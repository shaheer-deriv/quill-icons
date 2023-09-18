import { OutPutStoriesOptions } from '../outputters/stories';
import { getLogoComponentName } from '../svgr-configs/logos';
import { generateLogoStorybook } from '../templates/logo-story.template';
import { getDirName } from '../utils/figma.utils';

export const LogoStoriesOptions: OutPutStoriesOptions = {
  getDirName,
  getComponentName: getLogoComponentName,
  getCategoryName: ({ pageName }) => {
    return 'Logo';
  },
  getStorybookGenerator: generateLogoStorybook,
};
