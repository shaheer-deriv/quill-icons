import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyLinkIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyLinkIcon',
  component: CurrencyLinkIcon,
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
} satisfies Meta<typeof CurrencyLinkIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyLinkIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
