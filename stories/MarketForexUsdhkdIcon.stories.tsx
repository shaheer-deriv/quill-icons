import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexUsdhkdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexUsdhkdIcon',
  component: MarketForexUsdhkdIcon,
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
} satisfies Meta<typeof MarketForexUsdhkdIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexUsdhkdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
