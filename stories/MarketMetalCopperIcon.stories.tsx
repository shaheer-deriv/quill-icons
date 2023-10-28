import type { Meta, StoryObj } from '@storybook/react';

import { MarketMetalCopperIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketMetalCopperIcon',
  component: MarketMetalCopperIcon,
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
} satisfies Meta<typeof MarketMetalCopperIcon>;

export default meta;

type Story = StoryObj<typeof MarketMetalCopperIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
