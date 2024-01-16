import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedUsdjpyDfx20Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedUsdjpyDfx20Icon',
  component: MarketDerivedUsdjpyDfx20Icon,
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
} satisfies Meta<typeof MarketDerivedUsdjpyDfx20Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedUsdjpyDfx20Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
