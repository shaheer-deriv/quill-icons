import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexUsdmxnIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexUsdmxnIcon',
  component: MarketForexUsdmxnIcon,
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
} satisfies Meta<typeof MarketForexUsdmxnIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexUsdmxnIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
