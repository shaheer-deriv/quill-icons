import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexUsdrubIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexUsdrubIcon',
  component: MarketForexUsdrubIcon,
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
} satisfies Meta<typeof MarketForexUsdrubIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexUsdrubIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
