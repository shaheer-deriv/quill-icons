import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCompressBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCompressBoldIcon',
  component: StandaloneCompressBoldIcon,
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
} satisfies Meta<typeof StandaloneCompressBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCompressBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
