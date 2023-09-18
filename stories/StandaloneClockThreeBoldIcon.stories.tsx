import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneClockThreeBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneClockThreeBoldIcon',
  component: StandaloneClockThreeBoldIcon,
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
} satisfies Meta<typeof StandaloneClockThreeBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneClockThreeBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
