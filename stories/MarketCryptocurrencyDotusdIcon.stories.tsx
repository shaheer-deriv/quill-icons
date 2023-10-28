import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyDotusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyDotusdIcon',
  component: MarketCryptocurrencyDotusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyDotusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyDotusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
