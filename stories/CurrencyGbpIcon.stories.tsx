import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyGbpIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyGbpIcon',
  component: CurrencyGbpIcon,
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
} satisfies Meta<typeof CurrencyGbpIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyGbpIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
