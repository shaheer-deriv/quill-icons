import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexEurchfIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexEurchfIcon',
  component: MarketForexEurchfIcon,
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
} satisfies Meta<typeof MarketForexEurchfIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexEurchfIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
