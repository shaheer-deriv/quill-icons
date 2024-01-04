import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeUnderstandTheRisksIcon = (
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
      d='M28.72 4.16c-2.893-.707-5.147-1.48-6.013-2.053a.666.666 0 0 0-.734 0c-1.053.706-3.8 1.52-6.013 2.053a1.66 1.66 0 0 0-1.28 1.627v6.786c0 6.32 7.467 7.627 7.547 7.64h.213c.08 0 7.547-1.32 7.547-7.64V5.787c0-.774-.52-1.44-1.267-1.627m-.067 8.413c0 4.867-5.44 6.134-6.32 6.307-.84-.173-6.32-1.48-6.32-6.307V5.787c0-.16.094-.294.254-.32 1.333-.32 4.453-1.12 6.08-2.014 1.52.827 4.4 1.614 6.066 2.014.147.04.24.16.24.32zM23.787 6.96a1.64 1.64 0 0 0-1.427-.853c-.56 0-1.16.32-1.467.853l-3.28 5.8c-.293.52-.28 1.147.014 1.667.306.52.84.826 1.426.826h6.56c.6 0 1.134-.306 1.427-.826.307-.52.307-1.134.013-1.667l-3.28-5.8zm2.106 6.787s-.12.16-.28.16h-6.56c-.16 0-.24-.107-.28-.16-.026-.054-.093-.187 0-.334l3.28-5.8a.321.321 0 0 1 .294-.173c.053 0 .2.027.28.16l3.28 5.8c.08.16.026.293 0 .333zM23 10.24v1a.66.66 0 0 1-.667.667.66.66 0 0 1-.666-.667v-1a.66.66 0 0 1 .666-.667.66.66 0 0 1 .667.667m-.173 2.493a.5.5 0 0 1-.494.494.492.492 0 1 1 0-.987c.28 0 .494.227.494.493M10.84 22.307a2.413 2.413 0 1 0 4.825.001 2.413 2.413 0 0 0-4.825-.001m2.413-1.08c.6 0 1.08.48 1.08 1.08 0 .6-.48 1.08-1.08 1.08-.6 0-1.08-.48-1.08-1.08 0-.6.48-1.08 1.08-1.08m3.68 5.826v1.494c0 .92-.746 1.666-1.666 1.666h-4c-.92 0-1.667-.746-1.667-1.666v-1.494c0-1.186.973-2.16 2.16-2.16a.66.66 0 0 1 .667.667.66.66 0 0 1-.667.667.83.83 0 0 0-.827.826v1.494c0 .173.16.333.334.333h4c.173 0 .333-.16.333-.333v-1.494a.83.83 0 0 0-.827-.826.66.66 0 0 1-.666-.667.66.66 0 0 1 .666-.667c1.187 0 2.16.974 2.16 2.16m3.64-3.826a1.82 1.82 0 0 0-1.826-1.827 1.82 1.82 0 0 0-1.827 1.827 1.82 1.82 0 0 0 1.827 1.826 1.82 1.82 0 0 0 1.826-1.826m-2.32 0c0-.267.227-.494.494-.494.266 0 .493.227.493.494a.501.501 0 0 1-.493.493.501.501 0 0 1-.494-.493m3.16 4v1a1.32 1.32 0 0 1-1.333 1.333h-1.827a.66.66 0 0 1-.666-.667.66.66 0 0 1 .666-.666h1.827v-1a.348.348 0 0 0-.333-.334.66.66 0 0 1-.667-.666.66.66 0 0 1 .667-.667c.92 0 1.666.747 1.666 1.667M7.76 21.4a1.82 1.82 0 0 0-1.827 1.827 1.82 1.82 0 0 0 1.827 1.826 1.82 1.82 0 0 0 1.827-1.826A1.82 1.82 0 0 0 7.76 21.4m0 2.32a.501.501 0 0 1-.493-.493c0-.267.226-.494.493-.494s.493.227.493.494a.501.501 0 0 1-.493.493m1.173 5.173a.66.66 0 0 1-.666.667H6.44a1.32 1.32 0 0 1-1.333-1.333v-1c0-.92.746-1.667 1.666-1.667a.66.66 0 0 1 .667.667.66.66 0 0 1-.667.666.348.348 0 0 0-.333.334v1h1.827a.66.66 0 0 1 .666.666m.6-8.853a.647.647 0 0 0 .72.147.665.665 0 0 0 .414-.614v-1.106h.826c.92 0 1.667-.747 1.667-1.667V5.04c0-.92-.747-1.667-1.667-1.667H3.667C2.747 3.373 2 4.12 2 5.04V16.8c0 .92.747 1.667 1.667 1.667H7.96zm-6.2-3.24V5.04c0-.173.16-.333.334-.333h7.826c.174 0 .334.16.334.333V16.8c0 .173-.16.333-.334.333H10a.66.66 0 0 0-.667.667v.16l-.64-.64a.679.679 0 0 0-.466-.2h-4.56a.348.348 0 0 1-.334-.333zm4.92-1.693a.66.66 0 0 1-.666.666.66.66 0 0 1-.667-.666v-.667H5.587a.66.66 0 0 1-.667-.667.66.66 0 0 1 .667-.666H8.92v-1.334H6.253A1.32 1.32 0 0 1 4.92 10.44V9.107c0-.734.6-1.334 1.333-1.334h.667v-.666a.66.66 0 0 1 .667-.667.66.66 0 0 1 .666.667v.666h1.334a.66.66 0 0 1 .666.667.66.66 0 0 1-.666.667H6.253v1.333H8.92a1.32 1.32 0 0 1 1.333 1.333v1.334A1.32 1.32 0 0 1 8.92 14.44h-.667z'
    />
  </svg>
);
const ForwardRef = forwardRef(IllustrativeUnderstandTheRisksIcon);
export default ForwardRef;
