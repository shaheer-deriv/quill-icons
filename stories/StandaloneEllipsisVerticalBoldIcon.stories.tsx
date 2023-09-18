import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneEllipsisVerticalBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneEllipsisVerticalBoldIcon',
  component: StandaloneEllipsisVerticalBoldIcon,
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
} satisfies Meta<typeof StandaloneEllipsisVerticalBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneEllipsisVerticalBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
