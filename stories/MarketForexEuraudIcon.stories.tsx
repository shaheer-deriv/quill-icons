import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexEuraudIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexEuraudIcon',
  component: MarketForexEuraudIcon,
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
} satisfies Meta<typeof MarketForexEuraudIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexEuraudIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
