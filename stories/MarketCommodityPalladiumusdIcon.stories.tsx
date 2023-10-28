import type { Meta, StoryObj } from '@storybook/react';

import { MarketCommodityPalladiumusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCommodityPalladiumusdIcon',
  component: MarketCommodityPalladiumusdIcon,
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
} satisfies Meta<typeof MarketCommodityPalladiumusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCommodityPalladiumusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
