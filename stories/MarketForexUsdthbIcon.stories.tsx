import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexUsdthbIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexUsdthbIcon',
  component: MarketForexUsdthbIcon,
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
} satisfies Meta<typeof MarketForexUsdthbIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexUsdthbIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
