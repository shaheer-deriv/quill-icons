import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexChfjpyIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexChfjpyIcon',
  component: MarketForexChfjpyIcon,
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
} satisfies Meta<typeof MarketForexChfjpyIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexChfjpyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
