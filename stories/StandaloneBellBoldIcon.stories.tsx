import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBellBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneBellBoldIcon',
  component: StandaloneBellBoldIcon,
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
} satisfies Meta<typeof StandaloneBellBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBellBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
