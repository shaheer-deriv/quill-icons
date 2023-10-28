import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexGbpusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexGbpusdIcon',
  component: MarketForexGbpusdIcon,
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
} satisfies Meta<typeof MarketForexGbpusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexGbpusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
