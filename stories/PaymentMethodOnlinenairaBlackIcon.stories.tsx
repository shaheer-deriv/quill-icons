import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOnlinenairaBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodOnlinenairaBlackIcon',
  component: PaymentMethodOnlinenairaBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOnlinenairaBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOnlinenairaBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
