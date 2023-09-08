import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCopyBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCopyBoldIcon',
  component: StandaloneCopyBoldIcon,
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
} satisfies Meta<typeof StandaloneCopyBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCopyBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
