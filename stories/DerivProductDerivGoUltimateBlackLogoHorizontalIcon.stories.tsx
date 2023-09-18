import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoUltimateBlackLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoUltimateBlackLogoHorizontalIcon',
  component: DerivProductDerivGoUltimateBlackLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoUltimateBlackLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoUltimateBlackLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
