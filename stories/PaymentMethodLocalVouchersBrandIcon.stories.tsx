import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLocalVouchersBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLocalVouchersBrandIcon',
  component: PaymentMethodLocalVouchersBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLocalVouchersBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLocalVouchersBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
