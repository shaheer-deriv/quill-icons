import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedEurusdDfx10Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedEurusdDfx10Icon',
  component: MarketDerivedEurusdDfx10Icon,
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
} satisfies Meta<typeof MarketDerivedEurusdDfx10Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedEurusdDfx10Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
