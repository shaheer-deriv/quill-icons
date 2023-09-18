import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneForwardStepFillIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneForwardStepFillIcon',
  component: StandaloneForwardStepFillIcon,
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
} satisfies Meta<typeof StandaloneForwardStepFillIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneForwardStepFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
