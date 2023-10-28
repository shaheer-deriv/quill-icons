import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyAudIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyAudIcon',
  component: CurrencyAudIcon,
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
} satisfies Meta<typeof CurrencyAudIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyAudIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
