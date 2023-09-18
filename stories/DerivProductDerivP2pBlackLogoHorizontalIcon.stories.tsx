import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivP2pBlackLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivP2pBlackLogoHorizontalIcon',
  component: DerivProductDerivP2pBlackLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivP2pBlackLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivP2pBlackLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
