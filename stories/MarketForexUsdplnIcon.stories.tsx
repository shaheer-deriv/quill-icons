import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexUsdplnIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexUsdplnIcon',
  component: MarketForexUsdplnIcon,
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
} satisfies Meta<typeof MarketForexUsdplnIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexUsdplnIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
