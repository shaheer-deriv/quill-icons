import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivTraderWhiteLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivTraderWhiteLogoWordmarkHorizontalIcon',
  component: DerivProductDerivTraderWhiteLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivTraderWhiteLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivTraderWhiteLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
