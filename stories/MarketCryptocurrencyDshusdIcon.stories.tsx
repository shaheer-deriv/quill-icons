import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyDshusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyDshusdIcon',
  component: MarketCryptocurrencyDshusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyDshusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyDshusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
