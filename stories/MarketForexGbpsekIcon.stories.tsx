import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexGbpsekIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexGbpsekIcon',
  component: MarketForexGbpsekIcon,
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
} satisfies Meta<typeof MarketForexGbpsekIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexGbpsekIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
