import type { Meta, StoryObj } from '@storybook/react';

import { MarketCommodityAluminiumusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCommodityAluminiumusdIcon',
  component: MarketCommodityAluminiumusdIcon,
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
} satisfies Meta<typeof MarketCommodityAluminiumusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCommodityAluminiumusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
