import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyNeousdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyNeousdIcon',
  component: MarketCryptocurrencyNeousdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyNeousdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyNeousdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
