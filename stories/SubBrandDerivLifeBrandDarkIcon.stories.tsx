import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivLifeBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivLifeBrandDarkIcon',
  component: SubBrandDerivLifeBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivLifeBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivLifeBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
