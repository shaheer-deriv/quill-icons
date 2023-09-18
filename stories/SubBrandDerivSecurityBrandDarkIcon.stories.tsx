import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivSecurityBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivSecurityBrandDarkIcon',
  component: SubBrandDerivSecurityBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivSecurityBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivSecurityBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
