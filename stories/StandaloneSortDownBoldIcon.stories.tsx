import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSortDownBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneSortDownBoldIcon',
  component: StandaloneSortDownBoldIcon,
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
} satisfies Meta<typeof StandaloneSortDownBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSortDownBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
