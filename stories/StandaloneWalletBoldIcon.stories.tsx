import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneWalletBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneWalletBoldIcon',
  component: StandaloneWalletBoldIcon,
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
} satisfies Meta<typeof StandaloneWalletBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneWalletBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
