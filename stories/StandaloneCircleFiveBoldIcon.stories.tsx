import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleFiveBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleFiveBoldIcon',
  component: StandaloneCircleFiveBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleFiveBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleFiveBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
