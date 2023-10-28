import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexAudjpyIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexAudjpyIcon',
  component: MarketForexAudjpyIcon,
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
} satisfies Meta<typeof MarketForexAudjpyIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexAudjpyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
