import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodZenithBankBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodZenithBankBrandDarkIcon',
  component: PaymentMethodZenithBankBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodZenithBankBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodZenithBankBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
