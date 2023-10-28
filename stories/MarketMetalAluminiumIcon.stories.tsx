import type { Meta, StoryObj } from '@storybook/react';

import { MarketMetalAluminiumIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketMetalAluminiumIcon',
  component: MarketMetalAluminiumIcon,
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
} satisfies Meta<typeof MarketMetalAluminiumIcon>;

export default meta;

type Story = StoryObj<typeof MarketMetalAluminiumIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
