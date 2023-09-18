import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivTraderBlackLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivTraderBlackLogoHorizontalIcon',
  component: DerivProductDerivTraderBlackLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivTraderBlackLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivTraderBlackLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
