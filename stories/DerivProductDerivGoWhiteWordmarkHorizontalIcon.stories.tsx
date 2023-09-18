import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoWhiteWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoWhiteWordmarkHorizontalIcon',
  component: DerivProductDerivGoWhiteWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoWhiteWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoWhiteWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
