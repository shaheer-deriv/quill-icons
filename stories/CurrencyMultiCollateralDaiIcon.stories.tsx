import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyMultiCollateralDaiIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyMultiCollateralDaiIcon',
  component: CurrencyMultiCollateralDaiIcon,
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
} satisfies Meta<typeof CurrencyMultiCollateralDaiIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyMultiCollateralDaiIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
