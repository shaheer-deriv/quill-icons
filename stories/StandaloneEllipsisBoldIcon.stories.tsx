import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneEllipsisBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneEllipsisBoldIcon',
  component: StandaloneEllipsisBoldIcon,
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
} satisfies Meta<typeof StandaloneEllipsisBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneEllipsisBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
