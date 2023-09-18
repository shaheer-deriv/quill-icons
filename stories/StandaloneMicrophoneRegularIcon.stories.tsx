import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMicrophoneRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneMicrophoneRegularIcon',
  component: StandaloneMicrophoneRegularIcon,
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
} satisfies Meta<typeof StandaloneMicrophoneRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMicrophoneRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
