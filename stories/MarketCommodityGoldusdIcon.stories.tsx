import type { Meta, StoryObj } from '@storybook/react';

import { MarketCommodityGoldusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCommodityGoldusdIcon',
  component: MarketCommodityGoldusdIcon,
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
} satisfies Meta<typeof MarketCommodityGoldusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCommodityGoldusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
