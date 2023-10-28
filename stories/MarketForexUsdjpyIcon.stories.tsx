import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexUsdjpyIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexUsdjpyIcon',
  component: MarketForexUsdjpyIcon,
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
} satisfies Meta<typeof MarketForexUsdjpyIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexUsdjpyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
