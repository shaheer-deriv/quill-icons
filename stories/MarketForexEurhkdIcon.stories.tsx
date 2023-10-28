import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexEurhkdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexEurhkdIcon',
  component: MarketForexEurhkdIcon,
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
} satisfies Meta<typeof MarketForexEurhkdIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexEurhkdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
