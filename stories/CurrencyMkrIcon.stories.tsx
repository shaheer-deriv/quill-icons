import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyMkrIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyMkrIcon',
  component: CurrencyMkrIcon,
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
} satisfies Meta<typeof CurrencyMkrIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyMkrIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
