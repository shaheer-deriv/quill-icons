import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyEtcIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyEtcIcon',
  component: CurrencyEtcIcon,
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
} satisfies Meta<typeof CurrencyEtcIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyEtcIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
