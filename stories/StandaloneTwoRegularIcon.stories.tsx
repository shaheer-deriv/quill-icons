import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTwoRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneTwoRegularIcon',
  component: StandaloneTwoRegularIcon,
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
} satisfies Meta<typeof StandaloneTwoRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTwoRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
