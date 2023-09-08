import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMicrophoneBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneMicrophoneBoldIcon',
  component: StandaloneMicrophoneBoldIcon,
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
} satisfies Meta<typeof StandaloneMicrophoneBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMicrophoneBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
