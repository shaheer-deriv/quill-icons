import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexUsdilsIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexUsdilsIcon',
  component: MarketForexUsdilsIcon,
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
} satisfies Meta<typeof MarketForexUsdilsIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexUsdilsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
