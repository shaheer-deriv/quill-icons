import type { Meta, StoryObj } from '@storybook/react';

import { MarketCommodityLeadusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCommodityLeadusdIcon',
  component: MarketCommodityLeadusdIcon,
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
} satisfies Meta<typeof MarketCommodityLeadusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCommodityLeadusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
