import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyBusdIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyBusdIcon',
  component: CurrencyBusdIcon,
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
} satisfies Meta<typeof CurrencyBusdIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyBusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
