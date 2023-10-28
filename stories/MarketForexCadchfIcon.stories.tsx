import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexCadchfIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexCadchfIcon',
  component: MarketForexCadchfIcon,
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
} satisfies Meta<typeof MarketForexCadchfIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexCadchfIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
