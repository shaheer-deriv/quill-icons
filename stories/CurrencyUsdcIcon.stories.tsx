import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyUsdcIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyUsdcIcon',
  component: CurrencyUsdcIcon,
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
} satisfies Meta<typeof CurrencyUsdcIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyUsdcIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
