import type { Meta, StoryObj } from '@storybook/react';

import { MarketCommodityCopperusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCommodityCopperusdIcon',
  component: MarketCommodityCopperusdIcon,
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
} satisfies Meta<typeof MarketCommodityCopperusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCommodityCopperusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
