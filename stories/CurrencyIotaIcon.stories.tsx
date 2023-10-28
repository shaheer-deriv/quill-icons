import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyIotaIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyIotaIcon',
  component: CurrencyIotaIcon,
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
} satisfies Meta<typeof CurrencyIotaIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyIotaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
