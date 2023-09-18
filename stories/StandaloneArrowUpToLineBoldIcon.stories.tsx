import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowUpToLineBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowUpToLineBoldIcon',
  component: StandaloneArrowUpToLineBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowUpToLineBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowUpToLineBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
