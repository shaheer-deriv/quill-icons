import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleSixBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleSixBoldIcon',
  component: StandaloneCircleSixBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleSixBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleSixBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
