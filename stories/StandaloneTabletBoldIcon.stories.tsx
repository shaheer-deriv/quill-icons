import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTabletBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneTabletBoldIcon',
  component: StandaloneTabletBoldIcon,
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
} satisfies Meta<typeof StandaloneTabletBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTabletBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
