import { SVG_STORE_OUT_PUT_PATH } from './figma.constants';
import { getSvgStoreOriginalPath, getSvgStoreFinalPath } from './figma.utils';
import { svgrGetComponentName } from './svgr-configs';

export const SvgStoreConfig = {
  output: SVG_STORE_OUT_PUT_PATH,
  getIconId: svgrGetComponentName,
};

export const RenameSvgStoreConfig = {
  outPutPath: SVG_STORE_OUT_PUT_PATH,
  getOriginalPath: getSvgStoreOriginalPath,
  getFinalPath: getSvgStoreFinalPath,
};
