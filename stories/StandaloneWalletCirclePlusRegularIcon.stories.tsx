import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneWalletCirclePlusRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneWalletCirclePlusRegularIcon',
  component: StandaloneWalletCirclePlusRegularIcon,
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
} satisfies Meta<typeof StandaloneWalletCirclePlusRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneWalletCirclePlusRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
