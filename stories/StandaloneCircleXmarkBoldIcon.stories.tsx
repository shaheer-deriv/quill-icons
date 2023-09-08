import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleXmarkBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleXmarkBoldIcon',
  component: StandaloneCircleXmarkBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleXmarkBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleXmarkBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
