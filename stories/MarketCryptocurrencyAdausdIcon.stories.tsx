import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyAdausdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyAdausdIcon',
  component: MarketCryptocurrencyAdausdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyAdausdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyAdausdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
