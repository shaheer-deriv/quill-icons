import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyNoneIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyNoneIcon',
  component: CurrencyNoneIcon,
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
} satisfies Meta<typeof CurrencyNoneIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyNoneIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
