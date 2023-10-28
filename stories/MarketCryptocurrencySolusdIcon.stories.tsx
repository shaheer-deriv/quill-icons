import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencySolusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencySolusdIcon',
  component: MarketCryptocurrencySolusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencySolusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencySolusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
