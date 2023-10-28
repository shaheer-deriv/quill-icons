import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyIotusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyIotusdIcon',
  component: MarketCryptocurrencyIotusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyIotusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyIotusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
