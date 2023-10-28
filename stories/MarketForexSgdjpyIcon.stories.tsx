import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexSgdjpyIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexSgdjpyIcon',
  component: MarketForexSgdjpyIcon,
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
} satisfies Meta<typeof MarketForexSgdjpyIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexSgdjpyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
