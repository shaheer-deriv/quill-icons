import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyBtcIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyBtcIcon',
  component: CurrencyBtcIcon,
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
} satisfies Meta<typeof CurrencyBtcIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyBtcIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
