import type { Meta, StoryObj } from '@storybook/react';

import { LightZeroCommissionIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightZeroCommissionIcon',
  component: LightZeroCommissionIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightZeroCommissionIcon>;

export default meta;

type Story = StoryObj<typeof LightZeroCommissionIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
