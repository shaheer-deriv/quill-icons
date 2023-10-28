import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyBtcusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyBtcusdIcon',
  component: MarketCryptocurrencyBtcusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyBtcusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyBtcusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
