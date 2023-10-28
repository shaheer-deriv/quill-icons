import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyEursIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyEursIcon',
  component: CurrencyEursIcon,
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
} satisfies Meta<typeof CurrencyEursIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyEursIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
