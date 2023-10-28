import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexNzdcadIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexNzdcadIcon',
  component: MarketForexNzdcadIcon,
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
} satisfies Meta<typeof MarketForexNzdcadIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexNzdcadIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
