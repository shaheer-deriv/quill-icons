import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyUniusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyUniusdIcon',
  component: MarketCryptocurrencyUniusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyUniusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyUniusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
