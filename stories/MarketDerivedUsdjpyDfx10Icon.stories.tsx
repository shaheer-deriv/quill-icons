import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedUsdjpyDfx10Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedUsdjpyDfx10Icon',
  component: MarketDerivedUsdjpyDfx10Icon,
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
} satisfies Meta<typeof MarketDerivedUsdjpyDfx10Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedUsdjpyDfx10Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
