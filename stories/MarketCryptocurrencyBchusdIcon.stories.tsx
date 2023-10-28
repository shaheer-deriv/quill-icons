import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyBchusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyBchusdIcon',
  component: MarketCryptocurrencyBchusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyBchusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyBchusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
