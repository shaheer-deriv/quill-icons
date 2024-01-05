import type { Meta, StoryObj } from '@storybook/react';

import { LightEasyDepositWithdrawalIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightEasyDepositWithdrawalIcon',
  component: LightEasyDepositWithdrawalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightEasyDepositWithdrawalIcon>;

export default meta;

type Story = StoryObj<typeof LightEasyDepositWithdrawalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
