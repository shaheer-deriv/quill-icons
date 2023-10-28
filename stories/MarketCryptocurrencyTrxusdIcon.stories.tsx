import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyTrxusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyTrxusdIcon',
  component: MarketCryptocurrencyTrxusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyTrxusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyTrxusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
