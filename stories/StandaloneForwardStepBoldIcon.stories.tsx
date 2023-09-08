import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneForwardStepBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneForwardStepBoldIcon',
  component: StandaloneForwardStepBoldIcon,
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
} satisfies Meta<typeof StandaloneForwardStepBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneForwardStepBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
