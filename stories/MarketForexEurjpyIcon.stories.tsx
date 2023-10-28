import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexEurjpyIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexEurjpyIcon',
  component: MarketForexEurjpyIcon,
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
} satisfies Meta<typeof MarketForexEurjpyIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexEurjpyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
