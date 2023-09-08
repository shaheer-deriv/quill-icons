import { SVGProps } from 'react';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface QuillSvgProps extends SVGProps<SVGSVGElement> {
  iconSize?: IconSize;
}

export type SvgSize = {
  [key in IconSize]: {
    width: number;
    height: number;
  };
};
