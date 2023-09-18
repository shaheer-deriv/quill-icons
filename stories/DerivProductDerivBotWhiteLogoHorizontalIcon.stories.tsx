import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivBotWhiteLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivBotWhiteLogoHorizontalIcon',
  component: DerivProductDerivBotWhiteLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivBotWhiteLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivBotWhiteLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
