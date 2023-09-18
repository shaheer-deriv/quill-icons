import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOnlinenairaWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodOnlinenairaWhiteIcon',
  component: PaymentMethodOnlinenairaWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOnlinenairaWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOnlinenairaWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
