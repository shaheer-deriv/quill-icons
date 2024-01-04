import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneEyeSlashBoldIcon = (
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
    <path
      fillOpacity={0.72}
      d='m5.023 6.695 4.375 3.438a11.268 11.268 0 0 1 2.93-1.719c1.12-.417 2.344-.638 3.672-.664 1.588.026 3.008.339 4.258.938a12.778 12.778 0 0 1 3.281 2.226c.912.86 1.667 1.745 2.266 2.656.599.912 1.054 1.732 1.367 2.461.104.313.104.625 0 .938-.287.65-.69 1.38-1.211 2.187a16.139 16.139 0 0 1-1.914 2.461l4.101 3.203c.417.39.47.834.157 1.328-.39.417-.834.47-1.328.157L3.852 8.18c-.417-.39-.47-.834-.157-1.328.39-.417.834-.47 1.328-.157m5.899 4.61 1.797 1.406c.911-.781 2.005-1.185 3.281-1.211 1.406.026 2.591.508 3.555 1.445.937.964 1.419 2.149 1.445 3.555 0 .833-.182 1.602-.547 2.305l2.11 1.64a15.026 15.026 0 0 0 1.68-2.07c.468-.703.833-1.328 1.093-1.875a17.804 17.804 0 0 0-1.172-2.031 13.399 13.399 0 0 0-1.914-2.188 9.651 9.651 0 0 0-2.773-1.875c-1.042-.495-2.201-.755-3.477-.781-1.98.052-3.672.612-5.078 1.68m8.008 6.289c.13-.339.195-.703.195-1.094-.026-.885-.326-1.628-.898-2.227-.6-.572-1.342-.872-2.227-.898h-.078c.052.208.078.417.078.625 0 .39-.091.755-.273 1.094zm.351 5.117L20.921 24c-1.405.781-3.046 1.198-4.921 1.25-1.588-.026-3.008-.338-4.258-.937-1.25-.6-2.33-1.342-3.242-2.227-.937-.86-1.706-1.745-2.305-2.656-.599-.912-1.041-1.732-1.328-2.461a1.174 1.174 0 0 1 0-.938c.365-.937.99-2.005 1.875-3.203l1.485 1.133c-.704.937-1.224 1.784-1.563 2.539.287.599.677 1.276 1.172 2.031.52.756 1.159 1.485 1.914 2.188a9.651 9.651 0 0 0 2.773 1.875c1.042.494 2.201.755 3.477.781 1.198-.026 2.292-.247 3.281-.664M11 16.5v-.312l2.188 1.718c.442.86 1.145 1.407 2.109 1.64l2.187 1.72A4.662 4.662 0 0 1 16 21.5c-1.406-.026-2.591-.508-3.555-1.445-.937-.964-1.419-2.149-1.445-3.555'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEyeSlashBoldIcon);
export default ForwardRef;
