import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexUsdnokIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexUsdnokIcon',
  component: MarketForexUsdnokIcon,
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
} satisfies Meta<typeof MarketForexUsdnokIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexUsdnokIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
