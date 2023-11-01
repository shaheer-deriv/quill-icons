import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexHkdjpyIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexHkdjpyIcon',
  component: MarketForexHkdjpyIcon,
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
} satisfies Meta<typeof MarketForexHkdjpyIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexHkdjpyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
