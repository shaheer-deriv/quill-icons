import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoBlackLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoBlackLogoHorizontalIcon',
  component: DerivProductDerivGoBlackLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoBlackLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoBlackLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
