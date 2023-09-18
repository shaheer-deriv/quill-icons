import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivP2pWhiteLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivP2pWhiteLogoWordmarkHorizontalIcon',
  component: DerivProductDerivP2pWhiteLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivP2pWhiteLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivP2pWhiteLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
