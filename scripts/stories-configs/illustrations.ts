import { OutPutStoriesOptions } from '../outputters/stories';
import { getIllustrationComponentName } from '../svgr-configs/illustrations';
import { generateLogoStorybook } from '../templates/logo-story.template';
import { getDirName } from '../utils/figma.utils';

export const IllustrationStoriesOptions: OutPutStoriesOptions = {
  getDirName,
  getComponentName: getIllustrationComponentName,
  getCategoryName: ({ pageName }) => {
    return 'Illustrations';
  },
  getStorybookGenerator: generateLogoStorybook,
};
