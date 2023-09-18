import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSortUpRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneSortUpRegularIcon',
  component: StandaloneSortUpRegularIcon,
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
} satisfies Meta<typeof StandaloneSortUpRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSortUpRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
