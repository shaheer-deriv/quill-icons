import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedGbpusdDfx10Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedGbpusdDfx10Icon',
  component: MarketDerivedGbpusdDfx10Icon,
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
} satisfies Meta<typeof MarketDerivedGbpusdDfx10Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedGbpusdDfx10Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
