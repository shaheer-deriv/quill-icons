import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyOmgusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyOmgusdIcon',
  component: MarketCryptocurrencyOmgusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyOmgusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyOmgusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
