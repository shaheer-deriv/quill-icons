import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexGbpsgdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexGbpsgdIcon',
  component: MarketForexGbpsgdIcon,
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
} satisfies Meta<typeof MarketForexGbpsgdIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexGbpsgdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
