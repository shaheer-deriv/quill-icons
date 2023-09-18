import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivEzWhiteLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivEzWhiteLogoHorizontalIcon',
  component: DerivProductDerivEzWhiteLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivEzWhiteLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivEzWhiteLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
