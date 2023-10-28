import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyDogeIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyDogeIcon',
  component: CurrencyDogeIcon,
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
} satisfies Meta<typeof CurrencyDogeIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyDogeIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
