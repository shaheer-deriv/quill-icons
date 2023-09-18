import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivLifeBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivLifeBrandLightIcon',
  component: SubBrandDerivLifeBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivLifeBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivLifeBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
