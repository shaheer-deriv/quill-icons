import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyDaiIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyDaiIcon',
  component: CurrencyDaiIcon,
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
} satisfies Meta<typeof CurrencyDaiIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyDaiIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
