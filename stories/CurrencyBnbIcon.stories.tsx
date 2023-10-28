import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyBnbIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyBnbIcon',
  component: CurrencyBnbIcon,
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
} satisfies Meta<typeof CurrencyBnbIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyBnbIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
