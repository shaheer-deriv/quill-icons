import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyAlgoIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyAlgoIcon',
  component: CurrencyAlgoIcon,
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
} satisfies Meta<typeof CurrencyAlgoIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyAlgoIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
