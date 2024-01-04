import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneAppStoreIcon = (
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
      d='m16 11.227-.352-.625c-.286-.391-.65-.482-1.093-.274-.39.287-.482.651-.274 1.094l.781 1.406-2.578 4.492h-2.03c-.496.052-.77.326-.821.82.052.47.325.73.82.782h7.227c.182-.365.182-.716 0-1.055-.183-.338-.482-.52-.899-.547h-2.46l3.398-5.898c.208-.443.117-.807-.274-1.094-.442-.208-.807-.117-1.093.274zm-3.086 8.515c-.417-.495-.937-.65-1.562-.469l-.586 1.016c-.209.443-.104.794.312 1.055.443.208.807.117 1.094-.274zm6.602-2.422a5.34 5.34 0 0 1-.196-.351 279 279 0 0 0-2.148-3.711c-.26.208-.456.56-.586 1.055-.104.52 0 1.067.312 1.64.313.547.69 1.211 1.133 1.992.521.886 1.12 1.927 1.797 3.125.287.39.651.482 1.094.274.39-.26.495-.625.312-1.094l-.78-1.328h1.132c.495-.052.768-.313.82-.781-.052-.495-.325-.769-.82-.82zM16 6.813c1.797.026 3.424.468 4.883 1.328a9.672 9.672 0 0 1 3.476 3.476c.86 1.458 1.302 3.086 1.328 4.883-.026 1.797-.468 3.424-1.328 4.883a9.672 9.672 0 0 1-3.476 3.476c-1.459.86-3.086 1.302-4.883 1.328-1.797-.026-3.424-.468-4.883-1.328a9.672 9.672 0 0 1-3.476-3.476c-.86-1.459-1.302-3.086-1.328-4.883.026-1.797.468-3.424 1.328-4.883a9.672 9.672 0 0 1 3.476-3.476c1.458-.86 3.086-1.302 4.883-1.328m8.438 9.687c-.053-2.396-.873-4.388-2.461-5.977C20.362 8.935 18.37 8.115 16 8.063c-2.396.052-4.388.872-5.977 2.46-1.588 1.615-2.408 3.607-2.46 5.977.052 2.396.872 4.388 2.46 5.977 1.615 1.588 3.607 2.408 5.977 2.46 2.396-.052 4.388-.872 5.977-2.46 1.588-1.615 2.408-3.607 2.46-5.977'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneAppStoreIcon);
export default ForwardRef;
