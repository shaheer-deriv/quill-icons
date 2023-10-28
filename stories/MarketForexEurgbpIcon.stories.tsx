import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexEurgbpIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexEurgbpIcon',
  component: MarketForexEurgbpIcon,
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
} satisfies Meta<typeof MarketForexEurgbpIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexEurgbpIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
