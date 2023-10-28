import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyDogusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyDogusdIcon',
  component: MarketCryptocurrencyDogusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyDogusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyDogusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
