import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleEllipsisBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleEllipsisBoldIcon',
  component: StandaloneCircleEllipsisBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleEllipsisBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleEllipsisBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
