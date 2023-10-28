import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyDotIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyDotIcon',
  component: CurrencyDotIcon,
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
} satisfies Meta<typeof CurrencyDotIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyDotIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
