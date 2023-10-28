import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyTusdIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyTusdIcon',
  component: CurrencyTusdIcon,
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
} satisfies Meta<typeof CurrencyTusdIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyTusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
