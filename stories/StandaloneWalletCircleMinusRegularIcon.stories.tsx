import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneWalletCircleMinusRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneWalletCircleMinusRegularIcon',
  component: StandaloneWalletCircleMinusRegularIcon,
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
} satisfies Meta<typeof StandaloneWalletCircleMinusRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneWalletCircleMinusRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
