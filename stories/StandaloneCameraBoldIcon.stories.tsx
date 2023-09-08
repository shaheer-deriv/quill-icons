import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCameraBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCameraBoldIcon',
  component: StandaloneCameraBoldIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StandaloneCameraBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCameraBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
