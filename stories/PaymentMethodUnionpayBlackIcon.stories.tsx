import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodUnionpayBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodUnionpayBlackIcon',
  component: PaymentMethodUnionpayBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodUnionpayBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodUnionpayBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
