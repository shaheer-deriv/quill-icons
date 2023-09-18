import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMinusBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneMinusBoldIcon',
  component: StandaloneMinusBoldIcon,
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
} satisfies Meta<typeof StandaloneMinusBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMinusBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
