import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTakeProfitBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneTakeProfitBoldIcon',
  component: StandaloneTakeProfitBoldIcon,
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
} satisfies Meta<typeof StandaloneTakeProfitBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTakeProfitBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
