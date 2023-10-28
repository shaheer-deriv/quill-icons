import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyZecusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyZecusdIcon',
  component: MarketCryptocurrencyZecusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyZecusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyZecusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
