import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBackwardStepBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneBackwardStepBoldIcon',
  component: StandaloneBackwardStepBoldIcon,
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
} satisfies Meta<typeof StandaloneBackwardStepBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBackwardStepBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
