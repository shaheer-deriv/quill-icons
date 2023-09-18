import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivBotBlackLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivBotBlackLogoHorizontalIcon',
  component: DerivProductDerivBotBlackLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivBotBlackLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivBotBlackLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
