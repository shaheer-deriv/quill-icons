import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexEurzarIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexEurzarIcon',
  component: MarketForexEurzarIcon,
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
} satisfies Meta<typeof MarketForexEurzarIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexEurzarIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
