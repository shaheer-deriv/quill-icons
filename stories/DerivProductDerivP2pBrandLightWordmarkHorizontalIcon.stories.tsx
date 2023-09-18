import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivP2pBrandLightWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivP2pBrandLightWordmarkHorizontalIcon',
  component: DerivProductDerivP2pBrandLightWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivP2pBrandLightWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivP2pBrandLightWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
