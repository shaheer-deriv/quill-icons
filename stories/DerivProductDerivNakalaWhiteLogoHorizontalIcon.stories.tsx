import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivNakalaWhiteLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivNakalaWhiteLogoHorizontalIcon',
  component: DerivProductDerivNakalaWhiteLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivNakalaWhiteLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivNakalaWhiteLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
