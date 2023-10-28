import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyMkrusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyMkrusdIcon',
  component: MarketCryptocurrencyMkrusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyMkrusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyMkrusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
