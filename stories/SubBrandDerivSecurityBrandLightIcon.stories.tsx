import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivSecurityBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivSecurityBrandLightIcon',
  component: SubBrandDerivSecurityBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivSecurityBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivSecurityBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
