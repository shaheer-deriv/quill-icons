import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivPrimeBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivPrimeBrandLightIcon',
  component: SubBrandDerivPrimeBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivPrimeBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivPrimeBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
