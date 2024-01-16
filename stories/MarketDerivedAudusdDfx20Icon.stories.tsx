import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedAudusdDfx20Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedAudusdDfx20Icon',
  component: MarketDerivedAudusdDfx20Icon,
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
} satisfies Meta<typeof MarketDerivedAudusdDfx20Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedAudusdDfx20Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
