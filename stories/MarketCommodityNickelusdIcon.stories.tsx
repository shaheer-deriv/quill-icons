import type { Meta, StoryObj } from '@storybook/react';

import { MarketCommodityNickelusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCommodityNickelusdIcon',
  component: MarketCommodityNickelusdIcon,
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
} satisfies Meta<typeof MarketCommodityNickelusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCommodityNickelusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
