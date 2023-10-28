import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexUsdsgdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexUsdsgdIcon',
  component: MarketForexUsdsgdIcon,
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
} satisfies Meta<typeof MarketForexUsdsgdIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexUsdsgdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
