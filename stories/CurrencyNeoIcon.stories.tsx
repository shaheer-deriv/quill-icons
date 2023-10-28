import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyNeoIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyNeoIcon',
  component: CurrencyNeoIcon,
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
} satisfies Meta<typeof CurrencyNeoIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyNeoIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
