import { OutPutStoriesOptions } from '../outputters/stories';
import { getIconComponentName } from '../svgr-configs/icons';
import { generateIconStorybook } from '../templates/icon-story.template';
import { getDirName, getFileDescriptor, isFlagsPage } from '../utils/figma.utils';

export const IconStoriesOptions: OutPutStoriesOptions = {
  getDirName,
  getComponentName: getIconComponentName,
  getCategoryName: (options) => {
    return isFlagsPage(options) ? 'Flags' : getFileDescriptor(options).category;
  },
  getStorybookGenerator: generateIconStorybook,
};
