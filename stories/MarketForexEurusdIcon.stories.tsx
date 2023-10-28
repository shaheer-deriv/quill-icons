import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexEurusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexEurusdIcon',
  component: MarketForexEurusdIcon,
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
} satisfies Meta<typeof MarketForexEurusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexEurusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
