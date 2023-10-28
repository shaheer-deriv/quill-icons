import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyEosusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyEosusdIcon',
  component: MarketCryptocurrencyEosusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyEosusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyEosusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
