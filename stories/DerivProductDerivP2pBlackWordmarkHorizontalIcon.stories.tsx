import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivP2pBlackWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivP2pBlackWordmarkHorizontalIcon',
  component: DerivProductDerivP2pBlackWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivP2pBlackWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivP2pBlackWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
