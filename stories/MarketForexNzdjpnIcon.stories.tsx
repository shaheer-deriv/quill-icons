import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexNzdjpnIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexNzdjpnIcon',
  component: MarketForexNzdjpnIcon,
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
} satisfies Meta<typeof MarketForexNzdjpnIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexNzdjpnIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
