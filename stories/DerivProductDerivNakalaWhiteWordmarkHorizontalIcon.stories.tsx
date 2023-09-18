import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivNakalaWhiteWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivNakalaWhiteWordmarkHorizontalIcon',
  component: DerivProductDerivNakalaWhiteWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivNakalaWhiteWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivNakalaWhiteWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
