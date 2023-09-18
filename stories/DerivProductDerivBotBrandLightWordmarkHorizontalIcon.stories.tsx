import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivBotBrandLightWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivBotBrandLightWordmarkHorizontalIcon',
  component: DerivProductDerivBotBrandLightWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivBotBrandLightWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivBotBrandLightWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
