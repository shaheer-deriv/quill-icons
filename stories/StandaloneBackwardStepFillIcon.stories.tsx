import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBackwardStepFillIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneBackwardStepFillIcon',
  component: StandaloneBackwardStepFillIcon,
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
} satisfies Meta<typeof StandaloneBackwardStepFillIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBackwardStepFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
