import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexCadjpyIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexCadjpyIcon',
  component: MarketForexCadjpyIcon,
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
} satisfies Meta<typeof MarketForexCadjpyIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexCadjpyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
