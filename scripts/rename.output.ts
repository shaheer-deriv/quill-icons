import { ComponentOutputter } from '@figma-export/types';
import fs from 'fs';

interface TRenameESOptions {
  outPutPath: fs.PathLike;
  getOriginalPath: (pageName: string) => fs.PathLike;
  getFinalPath: (pageName: string) => fs.PathLike;
}

const renameOutPut = ({
  outPutPath,
  getOriginalPath,
  getFinalPath,
}: TRenameESOptions): ComponentOutputter => {
  return async (pages) => {
    pages.forEach((pageItem) => {
      const originalPath = getOriginalPath(pageItem.name).toString();
      const finalPath = getFinalPath(pageItem.name).toString();
      const configOutPutPath = outPutPath.toString();

      fs.rename(
        `${configOutPutPath}/${originalPath}`,
        `${configOutPutPath}/${finalPath}`,
        (err) => {
          if (err != null) {
            console.error(err.message);
          }
        },
      );
    });
  };
};

export default renameOutPut;
