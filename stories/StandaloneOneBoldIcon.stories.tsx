import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneOneBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneOneBoldIcon',
  component: StandaloneOneBoldIcon,
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
} satisfies Meta<typeof StandaloneOneBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneOneBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
