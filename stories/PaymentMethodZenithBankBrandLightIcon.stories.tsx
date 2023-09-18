import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodZenithBankBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodZenithBankBrandLightIcon',
  component: PaymentMethodZenithBankBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodZenithBankBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodZenithBankBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
