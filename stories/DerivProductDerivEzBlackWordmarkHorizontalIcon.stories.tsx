import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivEzBlackWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivEzBlackWordmarkHorizontalIcon',
  component: DerivProductDerivEzBlackWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivEzBlackWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivEzBlackWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
