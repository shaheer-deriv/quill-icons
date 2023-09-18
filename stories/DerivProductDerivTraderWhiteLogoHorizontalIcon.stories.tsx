import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivTraderWhiteLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivTraderWhiteLogoHorizontalIcon',
  component: DerivProductDerivTraderWhiteLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivTraderWhiteLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivTraderWhiteLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
