import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLockBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneLockBoldIcon',
  component: StandaloneLockBoldIcon,
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
} satisfies Meta<typeof StandaloneLockBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLockBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
