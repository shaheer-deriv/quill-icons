import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexEursekIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexEursekIcon',
  component: MarketForexEursekIcon,
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
} satisfies Meta<typeof MarketForexEursekIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexEursekIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
