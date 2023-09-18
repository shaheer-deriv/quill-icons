import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneStopwatchBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneStopwatchBoldIcon',
  component: StandaloneStopwatchBoldIcon,
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
} satisfies Meta<typeof StandaloneStopwatchBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneStopwatchBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
