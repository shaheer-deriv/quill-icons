import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyLtcIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyLtcIcon',
  component: CurrencyLtcIcon,
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
} satisfies Meta<typeof CurrencyLtcIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyLtcIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
