import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexEurcadIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexEurcadIcon',
  component: MarketForexEurcadIcon,
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
} satisfies Meta<typeof MarketForexEurcadIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexEurcadIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
