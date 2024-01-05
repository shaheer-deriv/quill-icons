import type { Meta, StoryObj } from '@storybook/react';

import { LightGlobalAccessIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightGlobalAccessIcon',
  component: LightGlobalAccessIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightGlobalAccessIcon>;

export default meta;

type Story = StoryObj<typeof LightGlobalAccessIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
