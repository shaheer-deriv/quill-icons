import type { Meta, StoryObj } from '@storybook/react';

import { LightSwapFreeIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightSwapFreeIcon',
  component: LightSwapFreeIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightSwapFreeIcon>;

export default meta;

type Story = StoryObj<typeof LightSwapFreeIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
