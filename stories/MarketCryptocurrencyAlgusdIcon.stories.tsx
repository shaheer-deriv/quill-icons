import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyAlgusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyAlgusdIcon',
  component: MarketCryptocurrencyAlgusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyAlgusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyAlgusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
