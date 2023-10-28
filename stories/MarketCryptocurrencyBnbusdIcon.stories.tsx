import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyBnbusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyBnbusdIcon',
  component: MarketCryptocurrencyBnbusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyBnbusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyBnbusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
