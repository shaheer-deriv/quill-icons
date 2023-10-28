import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyMtcusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyMtcusdIcon',
  component: MarketCryptocurrencyMtcusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyMtcusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyMtcusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
