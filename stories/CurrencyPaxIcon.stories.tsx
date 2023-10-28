import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyPaxIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyPaxIcon',
  component: CurrencyPaxIcon,
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
} satisfies Meta<typeof CurrencyPaxIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyPaxIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
