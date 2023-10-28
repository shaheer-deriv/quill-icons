import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyXrpIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyXrpIcon',
  component: CurrencyXrpIcon,
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
} satisfies Meta<typeof CurrencyXrpIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyXrpIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
