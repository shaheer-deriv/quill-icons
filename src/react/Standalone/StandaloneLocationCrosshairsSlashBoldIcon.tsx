import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneLocationCrosshairsSlashBoldIcon = (
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
    <path d='m5.023 6.695 5.704 4.492c1.171-1.171 2.617-1.874 4.335-2.109v-1.64c.053-.573.365-.886.938-.938.573.052.885.365.938.938v1.64c1.718.235 3.177.938 4.375 2.11 1.171 1.197 1.888 2.656 2.148 4.374h1.602c.572.053.885.365.937.938-.052.573-.365.885-.938.938h-1.601a8.003 8.003 0 0 1-1.016 2.93l5.703 4.452c.417.39.47.834.157 1.328-.39.417-.834.47-1.328.157L3.852 8.18c-.417-.39-.47-.834-.157-1.328.39-.417.834-.47 1.328-.157Zm7.188 5.664 1.523 1.172c.625-.495 1.38-.755 2.266-.781 1.068.026 1.953.39 2.656 1.094.703.703 1.068 1.588 1.094 2.656 0 .547-.104 1.055-.313 1.523l1.524 1.172c.443-.807.664-1.705.664-2.695-.052-1.588-.599-2.917-1.64-3.984-1.068-1.042-2.396-1.589-3.985-1.641-1.484.026-2.747.52-3.79 1.484Zm5.664 4.414h-.04c.027-.104.04-.195.04-.273a2.038 2.038 0 0 0-.547-1.328A2.038 2.038 0 0 0 16 14.625c-.26 0-.495.04-.703.117l2.578 2.031Zm1.836 6.25a8.122 8.122 0 0 1-2.773.938v1.602c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.938-.938v-1.601c-1.718-.26-3.177-.977-4.374-2.148-1.172-1.172-1.876-2.63-2.11-4.375h-1.64c-.573-.053-.886-.365-.938-.938.052-.573.365-.885.938-.938h1.64c.026-.39.104-.768.235-1.132l1.601 1.289c-.026.26-.039.52-.039.781.052 1.588.599 2.917 1.64 3.984 1.068 1.068 2.396 1.615 3.985 1.641.73 0 1.42-.13 2.07-.39l1.64 1.288Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLocationCrosshairsSlashBoldIcon);
export default ForwardRef;
