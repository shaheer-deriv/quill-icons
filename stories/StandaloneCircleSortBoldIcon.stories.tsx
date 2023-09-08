import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleSortBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleSortBoldIcon',
  component: StandaloneCircleSortBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleSortBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleSortBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
