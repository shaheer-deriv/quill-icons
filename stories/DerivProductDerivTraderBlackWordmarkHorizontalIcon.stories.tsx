import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivTraderBlackWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivTraderBlackWordmarkHorizontalIcon',
  component: DerivProductDerivTraderBlackWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivTraderBlackWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivTraderBlackWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
