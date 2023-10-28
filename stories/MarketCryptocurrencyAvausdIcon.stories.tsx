import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyAvausdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyAvausdIcon',
  component: MarketCryptocurrencyAvausdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyAvausdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyAvausdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
