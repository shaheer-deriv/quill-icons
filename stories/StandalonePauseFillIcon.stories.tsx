import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePauseFillIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandalonePauseFillIcon',
  component: StandalonePauseFillIcon,
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
} satisfies Meta<typeof StandalonePauseFillIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePauseFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
