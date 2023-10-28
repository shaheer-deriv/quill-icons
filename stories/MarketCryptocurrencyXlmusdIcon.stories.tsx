import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyXlmusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyXlmusdIcon',
  component: MarketCryptocurrencyXlmusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyXlmusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyXlmusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
