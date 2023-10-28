import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyXmrIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyXmrIcon',
  component: CurrencyXmrIcon,
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
} satisfies Meta<typeof CurrencyXmrIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyXmrIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
