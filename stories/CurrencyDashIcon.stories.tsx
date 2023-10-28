import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyDashIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyDashIcon',
  component: CurrencyDashIcon,
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
} satisfies Meta<typeof CurrencyDashIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyDashIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
