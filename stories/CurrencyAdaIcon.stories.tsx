import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyAdaIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyAdaIcon',
  component: CurrencyAdaIcon,
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
} satisfies Meta<typeof CurrencyAdaIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyAdaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
