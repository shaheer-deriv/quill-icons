import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyBchIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyBchIcon',
  component: CurrencyBchIcon,
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
} satisfies Meta<typeof CurrencyBchIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyBchIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
