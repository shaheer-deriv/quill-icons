import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedUsdchfDfx10Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedUsdchfDfx10Icon',
  component: MarketDerivedUsdchfDfx10Icon,
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
} satisfies Meta<typeof MarketDerivedUsdchfDfx10Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedUsdchfDfx10Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
