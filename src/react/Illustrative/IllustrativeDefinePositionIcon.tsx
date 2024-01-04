import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeDefinePositionIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g fillOpacity={0.72}>
      <path d='M26.567 7.84a.671.671 0 0 0-.167.927A12.602 12.602 0 0 1 28.667 16c0 6.987-5.68 12.667-12.667 12.667S3.333 22.987 3.333 16 9.013 3.333 16 3.333c2.607 0 5.113.787 7.24 2.274.3.206.72.133.927-.167.213-.3.14-.72-.167-.927A13.93 13.93 0 0 0 16 2C8.28 2 2 8.28 2 16s6.28 14 14 14 14-6.28 14-14c0-2.88-.867-5.64-2.507-7.993a.671.671 0 0 0-.926-.167' />
      <path d='M21.893 7.7a.67.67 0 0 0-.22-.92A10.83 10.83 0 0 0 16 5.173c-5.967 0-10.827 4.86-10.827 10.827S10.027 26.827 16 26.827 26.827 21.973 26.827 16c0-2.007-.554-3.973-1.6-5.673a.67.67 0 0 0-.92-.22.67.67 0 0 0-.22.92A9.475 9.475 0 0 1 25.493 16c0 5.233-4.26 9.493-9.493 9.493-5.233 0-9.493-4.26-9.493-9.493 0-5.233 4.26-9.493 9.493-9.493 1.76 0 3.48.486 4.973 1.406a.67.67 0 0 0 .92-.22z' />
      <path d='M19.587 9.967a.665.665 0 0 0-.32-.887A7.571 7.571 0 0 0 16 8.347c-4.22 0-7.653 3.433-7.653 7.653S11.78 23.653 16 23.653 23.653 20.22 23.653 16a7.57 7.57 0 0 0-.733-3.267.67.67 0 0 0-.887-.32.67.67 0 0 0-.32.887c.4.847.607 1.753.607 2.7A6.325 6.325 0 0 1 16 22.32 6.325 6.325 0 0 1 9.68 16 6.325 6.325 0 0 1 16 9.68c.947 0 1.853.2 2.7.607.333.16.727.013.887-.32' />
      <path d='M16.533 11.36a.663.663 0 0 0-.74.587c-.04.366.22.693.587.74l.14.02c.033 0 .067.006.107.006.32 0 .606-.233.66-.566a.665.665 0 0 0-.554-.76c-.06-.007-.126-.02-.186-.027zM12.127 15.667c.3 0 .566-.2.646-.5.02-.087.047-.167.074-.254a.668.668 0 0 0-.414-.846.668.668 0 0 0-.846.413c-.04.113-.074.233-.107.36a.669.669 0 0 0 .647.833zM11.82 18.08a.671.671 0 0 0 .9.293.674.674 0 0 0 .3-.893c-.04-.08-.073-.16-.107-.24a.674.674 0 0 0-.866-.373.674.674 0 0 0-.374.866c.047.114.1.227.154.34zM13.733 13.367c.127 0 .26-.04.374-.12.073-.054.146-.1.226-.14a.666.666 0 0 0 .24-.914.666.666 0 0 0-.913-.24c-.107.06-.213.127-.313.2a.665.665 0 0 0 .38 1.214zM18.873 17.693c-.046.08-.093.154-.146.227a.663.663 0 0 0 .546 1.047c.207 0 .414-.1.547-.28.073-.1.14-.207.2-.314a.665.665 0 0 0-.233-.913.664.664 0 0 0-.914.233M13.873 20.153c.107.054.22.107.334.154a.665.665 0 0 0 .873-.353.672.672 0 0 0-.36-.874c-.08-.033-.16-.073-.24-.113a.673.673 0 0 0-.9.286.672.672 0 0 0 .287.9zM16.96 20.553c.053 0 .107 0 .16-.02.12-.033.24-.066.36-.106a.668.668 0 0 0-.433-1.26 3.49 3.49 0 0 1-.247.073.663.663 0 0 0-.487.807.662.662 0 0 0 .647.506M19.973 16.22h.074a.666.666 0 0 0 .593-.733.898.898 0 0 0-.027-.194.66.66 0 0 0-.76-.553.664.664 0 0 0-.553.76l.02.133c.033.34.327.594.66.594z' />
      <path d='M16 14c-.367 0-.667.3-.667.667V16a.679.679 0 0 0 .667.667h1.333c.367 0 .667-.3.667-.667a.655.655 0 0 0-.44-.62L27.607 5.333h1.726c.367 0 .667-.3.667-.666C30 4.3 29.7 4 29.333 4H28V2.667C28 2.3 27.7 2 27.333 2c-.366 0-.666.3-.666.667v1.726L16.62 14.44A.665.665 0 0 0 16 14' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeDefinePositionIcon);
export default ForwardRef;
