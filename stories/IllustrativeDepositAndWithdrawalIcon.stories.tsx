import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeDepositAndWithdrawalIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeDepositAndWithdrawalIcon',
  component: IllustrativeDepositAndWithdrawalIcon,
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
} satisfies Meta<typeof IllustrativeDepositAndWithdrawalIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeDepositAndWithdrawalIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
