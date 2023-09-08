import { ComponentOutputter } from '@figma-export/types';
import fs from 'fs';
import path from 'path';
import { getFileDescriptor, isFlagsPage } from '../figma.utils';
import { generateStoryBook } from '../templates/story.template';
import { svgrGetComponentName, svgrGetDirName } from '../svgr-configs';

const outPutStories = (): ComponentOutputter => {
  return async (pages) => {
    const dir = './stories/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    pages.forEach(({ name: pageName, components }) => {
      components.forEach(({ name: componentName, figmaExport }) => {
        const options = {
          pageName,
          componentName,
          ...figmaExport,
        };
        const category = isFlagsPage(options)
          ? 'flags'
          : getFileDescriptor(options.componentName).category;
        const IconName = svgrGetComponentName(options);
        const dirName = svgrGetDirName(options);
        const storybook = generateStoryBook({
          IconName,
          dirName,
          category,
        });
        const storyBookPath = path.resolve(dir.toString(), `${IconName}.stories.tsx`);
        fs.writeFileSync(storyBookPath, storybook);
      });
    });
  };
};

export default outPutStories;
