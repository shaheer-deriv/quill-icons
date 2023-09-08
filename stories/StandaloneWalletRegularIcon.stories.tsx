import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneWalletRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneWalletRegularIcon',
  component: StandaloneWalletRegularIcon,
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
} satisfies Meta<typeof StandaloneWalletRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneWalletRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
