import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBackwardFillIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneBackwardFillIcon',
  component: StandaloneBackwardFillIcon,
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
} satisfies Meta<typeof StandaloneBackwardFillIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBackwardFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
