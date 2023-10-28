import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexUsdrmbIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexUsdrmbIcon',
  component: MarketForexUsdrmbIcon,
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
} satisfies Meta<typeof MarketForexUsdrmbIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexUsdrmbIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
