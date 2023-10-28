import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyEthIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyEthIcon',
  component: CurrencyEthIcon,
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
} satisfies Meta<typeof CurrencyEthIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyEthIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
