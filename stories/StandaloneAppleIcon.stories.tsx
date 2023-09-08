import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneAppleIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneAppleIcon',
  component: StandaloneAppleIcon,
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
} satisfies Meta<typeof StandaloneAppleIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneAppleIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
