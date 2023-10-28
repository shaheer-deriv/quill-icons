import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyLnkusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyLnkusdIcon',
  component: MarketCryptocurrencyLnkusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyLnkusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyLnkusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
