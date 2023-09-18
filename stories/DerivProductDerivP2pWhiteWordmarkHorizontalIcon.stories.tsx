import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivP2pWhiteWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivP2pWhiteWordmarkHorizontalIcon',
  component: DerivProductDerivP2pWhiteWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivP2pWhiteWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivP2pWhiteWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
