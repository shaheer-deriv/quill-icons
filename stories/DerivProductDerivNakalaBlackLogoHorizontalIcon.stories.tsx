import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivNakalaBlackLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivNakalaBlackLogoHorizontalIcon',
  component: DerivProductDerivNakalaBlackLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivNakalaBlackLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivNakalaBlackLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
