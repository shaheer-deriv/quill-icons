import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyTrxIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyTrxIcon',
  component: CurrencyTrxIcon,
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
} satisfies Meta<typeof CurrencyTrxIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyTrxIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
