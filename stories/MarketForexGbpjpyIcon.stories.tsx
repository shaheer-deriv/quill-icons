import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexGbpjpyIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexGbpjpyIcon',
  component: MarketForexGbpjpyIcon,
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
} satisfies Meta<typeof MarketForexGbpjpyIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexGbpjpyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
