import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartAreaLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M1.25 7.375v13.75c.026.52.208.963.547 1.328.364.339.807.521 1.328.547h16.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H3.125c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227V7.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625Zm10.352 6.523-2.852-2.89-3.555 3.594a.52.52 0 0 0-.195.43v4.218h12.5v-3.672c0-.156-.052-.3-.156-.43l-2.422-2.812-1.524 1.562c-.26.235-.56.352-.898.352-.338 0-.638-.117-.898-.352Zm0-1.796L12.5 13l.898-.898.665-.665c.26-.234.56-.351.898-.351.364.026.664.17.898.43l2.422 2.851c.313.339.469.742.469 1.211v3.672c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352H5c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898v-4.219c0-.52.182-.963.547-1.328l3.555-3.555c.26-.26.56-.39.898-.39.339 0 .638.13.898.39l1.954 1.954Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaLgRegularIcon);
export default ForwardRef;
