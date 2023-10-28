import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexAudusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexAudusdIcon',
  component: MarketForexAudusdIcon,
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
} satisfies Meta<typeof MarketForexAudusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexAudusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
