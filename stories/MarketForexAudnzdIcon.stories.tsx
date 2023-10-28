import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexAudnzdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexAudnzdIcon',
  component: MarketForexAudnzdIcon,
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
} satisfies Meta<typeof MarketForexAudnzdIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexAudnzdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
