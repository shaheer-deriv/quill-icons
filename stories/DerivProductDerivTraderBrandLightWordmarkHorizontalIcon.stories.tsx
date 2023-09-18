import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivTraderBrandLightWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivTraderBrandLightWordmarkHorizontalIcon',
  component: DerivProductDerivTraderBrandLightWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivTraderBrandLightWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivTraderBrandLightWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
