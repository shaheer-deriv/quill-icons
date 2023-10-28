import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyUniIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyUniIcon',
  component: CurrencyUniIcon,
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
} satisfies Meta<typeof CurrencyUniIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyUniIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
