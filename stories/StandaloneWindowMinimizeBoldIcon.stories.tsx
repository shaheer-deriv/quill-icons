import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneWindowMinimizeBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneWindowMinimizeBoldIcon',
  component: StandaloneWindowMinimizeBoldIcon,
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
} satisfies Meta<typeof StandaloneWindowMinimizeBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneWindowMinimizeBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
