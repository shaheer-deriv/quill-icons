import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedUsdchfDfx20Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedUsdchfDfx20Icon',
  component: MarketDerivedUsdchfDfx20Icon,
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
} satisfies Meta<typeof MarketDerivedUsdchfDfx20Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedUsdchfDfx20Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
