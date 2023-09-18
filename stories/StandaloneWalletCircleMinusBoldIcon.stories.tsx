import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneWalletCircleMinusBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneWalletCircleMinusBoldIcon',
  component: StandaloneWalletCircleMinusBoldIcon,
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
} satisfies Meta<typeof StandaloneWalletCircleMinusBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneWalletCircleMinusBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
