import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivEzWhiteWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivEzWhiteWordmarkHorizontalIcon',
  component: DerivProductDerivEzWhiteWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivEzWhiteWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivEzWhiteWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
