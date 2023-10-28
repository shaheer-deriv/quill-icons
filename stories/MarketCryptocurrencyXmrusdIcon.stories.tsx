import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyXmrusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyXmrusdIcon',
  component: MarketCryptocurrencyXmrusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyXmrusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyXmrusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
