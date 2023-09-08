import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSortRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneSortRegularIcon',
  component: StandaloneSortRegularIcon,
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
} satisfies Meta<typeof StandaloneSortRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSortRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
