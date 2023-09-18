import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBarsFilterBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneBarsFilterBoldIcon',
  component: StandaloneBarsFilterBoldIcon,
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
} satisfies Meta<typeof StandaloneBarsFilterBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBarsFilterBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
