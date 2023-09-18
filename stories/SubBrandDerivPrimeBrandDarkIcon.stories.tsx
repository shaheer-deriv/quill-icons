import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivPrimeBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivPrimeBrandDarkIcon',
  component: SubBrandDerivPrimeBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivPrimeBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivPrimeBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
