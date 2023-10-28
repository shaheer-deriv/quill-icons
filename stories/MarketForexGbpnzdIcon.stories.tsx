import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexGbpnzdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexGbpnzdIcon',
  component: MarketForexGbpnzdIcon,
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
} satisfies Meta<typeof MarketForexGbpnzdIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexGbpnzdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
