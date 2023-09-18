import { SVG_STORE_OUT_PUT_PATH } from '../utils/figma.constants';
import { getComponentName } from '../utils/figma.utils';

export const SvgStoreConfig = {
  output: SVG_STORE_OUT_PUT_PATH,
  getIconId: getComponentName,
};
