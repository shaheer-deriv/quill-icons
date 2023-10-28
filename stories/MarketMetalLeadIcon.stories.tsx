import type { Meta, StoryObj } from '@storybook/react';

import { MarketMetalLeadIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketMetalLeadIcon',
  component: MarketMetalLeadIcon,
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
} satisfies Meta<typeof MarketMetalLeadIcon>;

export default meta;

type Story = StoryObj<typeof MarketMetalLeadIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
