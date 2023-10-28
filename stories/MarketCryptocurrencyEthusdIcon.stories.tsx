import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyEthusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyEthusdIcon',
  component: MarketCryptocurrencyEthusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyEthusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyEthusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
