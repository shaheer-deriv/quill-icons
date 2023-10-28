import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyIdkIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyIdkIcon',
  component: CurrencyIdkIcon,
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
} satisfies Meta<typeof CurrencyIdkIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyIdkIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
