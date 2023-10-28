import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexUsdcadIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexUsdcadIcon',
  component: MarketForexUsdcadIcon,
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
} satisfies Meta<typeof MarketForexUsdcadIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexUsdcadIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
