import type { Meta, StoryObj } from '@storybook/react';

import { CurrencySolIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencySolIcon',
  component: CurrencySolIcon,
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
} satisfies Meta<typeof CurrencySolIcon>;

export default meta;

type Story = StoryObj<typeof CurrencySolIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
