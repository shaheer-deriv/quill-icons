import type { Meta, StoryObj } from '@storybook/react';

import { MarketMetalNickelIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketMetalNickelIcon',
  component: MarketMetalNickelIcon,
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
} satisfies Meta<typeof MarketMetalNickelIcon>;

export default meta;

type Story = StoryObj<typeof MarketMetalNickelIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
