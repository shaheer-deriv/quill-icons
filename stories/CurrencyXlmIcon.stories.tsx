import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyXlmIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyXlmIcon',
  component: CurrencyXlmIcon,
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
} satisfies Meta<typeof CurrencyXlmIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyXlmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
