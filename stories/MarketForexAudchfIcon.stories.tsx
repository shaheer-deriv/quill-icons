import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexAudchfIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexAudchfIcon',
  component: MarketForexAudchfIcon,
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
} satisfies Meta<typeof MarketForexAudchfIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexAudchfIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
