import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyUsdIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyUsdIcon',
  component: CurrencyUsdIcon,
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
} satisfies Meta<typeof CurrencyUsdIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyUsdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
