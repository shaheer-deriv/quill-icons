import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyEurIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyEurIcon',
  component: CurrencyEurIcon,
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
} satisfies Meta<typeof CurrencyEurIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyEurIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
