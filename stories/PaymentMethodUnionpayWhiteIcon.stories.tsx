import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodUnionpayWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodUnionpayWhiteIcon',
  component: PaymentMethodUnionpayWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodUnionpayWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodUnionpayWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
