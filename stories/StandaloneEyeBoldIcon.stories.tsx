import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneEyeBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneEyeBoldIcon',
  component: StandaloneEyeBoldIcon,
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
} satisfies Meta<typeof StandaloneEyeBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneEyeBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
