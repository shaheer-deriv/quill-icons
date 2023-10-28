import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyPlaceholderIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyPlaceholderIcon',
  component: CurrencyPlaceholderIcon,
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
} satisfies Meta<typeof CurrencyPlaceholderIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyPlaceholderIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
