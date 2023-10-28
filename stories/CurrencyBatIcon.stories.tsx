import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyBatIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyBatIcon',
  component: CurrencyBatIcon,
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
} satisfies Meta<typeof CurrencyBatIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyBatIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
