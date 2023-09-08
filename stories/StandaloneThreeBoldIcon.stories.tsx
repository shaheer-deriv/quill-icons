import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneThreeBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneThreeBoldIcon',
  component: StandaloneThreeBoldIcon,
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
} satisfies Meta<typeof StandaloneThreeBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneThreeBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
