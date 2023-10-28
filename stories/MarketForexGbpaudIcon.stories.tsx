import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexGbpaudIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexGbpaudIcon',
  component: MarketForexGbpaudIcon,
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
} satisfies Meta<typeof MarketForexGbpaudIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexGbpaudIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
