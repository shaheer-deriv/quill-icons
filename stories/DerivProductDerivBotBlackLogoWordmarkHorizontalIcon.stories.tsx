import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivBotBlackLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivBotBlackLogoWordmarkHorizontalIcon',
  component: DerivProductDerivBotBlackLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivBotBlackLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivBotBlackLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
