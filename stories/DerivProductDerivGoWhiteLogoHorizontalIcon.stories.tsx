import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoWhiteLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoWhiteLogoHorizontalIcon',
  component: DerivProductDerivGoWhiteLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoWhiteLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoWhiteLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
