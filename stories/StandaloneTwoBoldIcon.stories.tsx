import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTwoBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneTwoBoldIcon',
  component: StandaloneTwoBoldIcon,
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
} satisfies Meta<typeof StandaloneTwoBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTwoBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
