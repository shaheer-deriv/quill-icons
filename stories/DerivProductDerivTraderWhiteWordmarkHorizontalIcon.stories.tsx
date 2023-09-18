import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivTraderWhiteWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivTraderWhiteWordmarkHorizontalIcon',
  component: DerivProductDerivTraderWhiteWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivTraderWhiteWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivTraderWhiteWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
