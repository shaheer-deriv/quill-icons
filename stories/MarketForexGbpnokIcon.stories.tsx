import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexGbpnokIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexGbpnokIcon',
  component: MarketForexGbpnokIcon,
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
} satisfies Meta<typeof MarketForexGbpnokIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexGbpnokIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
