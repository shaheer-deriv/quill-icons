import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneWindowMaximizeBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneWindowMaximizeBoldIcon',
  component: StandaloneWindowMaximizeBoldIcon,
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
} satisfies Meta<typeof StandaloneWindowMaximizeBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneWindowMaximizeBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
