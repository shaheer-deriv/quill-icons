import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyOmgIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyOmgIcon',
  component: CurrencyOmgIcon,
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
} satisfies Meta<typeof CurrencyOmgIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyOmgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
