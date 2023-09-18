import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneStopwatchRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneStopwatchRegularIcon',
  component: StandaloneStopwatchRegularIcon,
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
} satisfies Meta<typeof StandaloneStopwatchRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneStopwatchRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
