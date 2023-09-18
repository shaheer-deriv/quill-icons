import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneWalletCirclePlusBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneWalletCirclePlusBoldIcon',
  component: StandaloneWalletCirclePlusBoldIcon,
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
} satisfies Meta<typeof StandaloneWalletCirclePlusBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneWalletCirclePlusBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
