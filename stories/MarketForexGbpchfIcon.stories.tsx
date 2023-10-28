import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexGbpchfIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexGbpchfIcon',
  component: MarketForexGbpchfIcon,
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
} satisfies Meta<typeof MarketForexGbpchfIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexGbpchfIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
