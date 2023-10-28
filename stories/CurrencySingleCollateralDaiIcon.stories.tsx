import type { Meta, StoryObj } from '@storybook/react';

import { CurrencySingleCollateralDaiIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencySingleCollateralDaiIcon',
  component: CurrencySingleCollateralDaiIcon,
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
} satisfies Meta<typeof CurrencySingleCollateralDaiIcon>;

export default meta;

type Story = StoryObj<typeof CurrencySingleCollateralDaiIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
