import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodUnionpayBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodUnionpayBrandDarkIcon',
  component: PaymentMethodUnionpayBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodUnionpayBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodUnionpayBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
