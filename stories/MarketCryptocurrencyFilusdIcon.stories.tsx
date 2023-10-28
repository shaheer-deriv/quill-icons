import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyFilusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyFilusdIcon',
  component: MarketCryptocurrencyFilusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyFilusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyFilusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
