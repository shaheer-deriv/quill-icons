import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyXtzusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyXtzusdIcon',
  component: MarketCryptocurrencyXtzusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyXtzusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyXtzusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
