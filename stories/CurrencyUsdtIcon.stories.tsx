import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyUsdtIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyUsdtIcon',
  component: CurrencyUsdtIcon,
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
} satisfies Meta<typeof CurrencyUsdtIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyUsdtIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
