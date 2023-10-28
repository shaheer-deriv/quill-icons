import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexNzdusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexNzdusdIcon',
  component: MarketForexNzdusdIcon,
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
} satisfies Meta<typeof MarketForexNzdusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexNzdusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
