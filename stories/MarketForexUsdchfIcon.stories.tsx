import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexUsdchfIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexUsdchfIcon',
  component: MarketForexUsdchfIcon,
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
} satisfies Meta<typeof MarketForexUsdchfIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexUsdchfIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
