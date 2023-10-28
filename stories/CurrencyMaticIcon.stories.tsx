import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyMaticIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyMaticIcon',
  component: CurrencyMaticIcon,
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
} satisfies Meta<typeof CurrencyMaticIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyMaticIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
