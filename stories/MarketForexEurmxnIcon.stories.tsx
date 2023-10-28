import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexEurmxnIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexEurmxnIcon',
  component: MarketForexEurmxnIcon,
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
} satisfies Meta<typeof MarketForexEurmxnIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexEurmxnIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
