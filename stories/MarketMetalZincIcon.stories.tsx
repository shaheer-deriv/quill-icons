import type { Meta, StoryObj } from '@storybook/react';

import { MarketMetalZincIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketMetalZincIcon',
  component: MarketMetalZincIcon,
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
} satisfies Meta<typeof MarketMetalZincIcon>;

export default meta;

type Story = StoryObj<typeof MarketMetalZincIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
