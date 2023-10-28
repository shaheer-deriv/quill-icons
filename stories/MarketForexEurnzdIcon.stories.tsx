import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexEurnzdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexEurnzdIcon',
  component: MarketForexEurnzdIcon,
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
} satisfies Meta<typeof MarketForexEurnzdIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexEurnzdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
