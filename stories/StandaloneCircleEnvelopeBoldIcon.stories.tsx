import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleEnvelopeBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleEnvelopeBoldIcon',
  component: StandaloneCircleEnvelopeBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleEnvelopeBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleEnvelopeBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
