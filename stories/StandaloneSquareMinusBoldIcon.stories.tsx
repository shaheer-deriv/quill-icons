import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSquareMinusBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneSquareMinusBoldIcon',
  component: StandaloneSquareMinusBoldIcon,
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
} satisfies Meta<typeof StandaloneSquareMinusBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSquareMinusBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
