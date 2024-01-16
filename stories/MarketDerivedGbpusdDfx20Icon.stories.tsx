import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedGbpusdDfx20Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedGbpusdDfx20Icon',
  component: MarketDerivedGbpusdDfx20Icon,
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
} satisfies Meta<typeof MarketDerivedGbpusdDfx20Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedGbpusdDfx20Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
