import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneForwardBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneForwardBoldIcon',
  component: StandaloneForwardBoldIcon,
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
} satisfies Meta<typeof StandaloneForwardBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneForwardBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
