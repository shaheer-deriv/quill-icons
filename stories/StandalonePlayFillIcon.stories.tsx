import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePlayFillIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandalonePlayFillIcon',
  component: StandalonePlayFillIcon,
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
} satisfies Meta<typeof StandalonePlayFillIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePlayFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
