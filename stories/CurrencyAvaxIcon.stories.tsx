import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyAvaxIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyAvaxIcon',
  component: CurrencyAvaxIcon,
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
} satisfies Meta<typeof CurrencyAvaxIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyAvaxIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
