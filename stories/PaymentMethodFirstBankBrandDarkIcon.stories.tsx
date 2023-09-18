import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFirstBankBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFirstBankBrandDarkIcon',
  component: PaymentMethodFirstBankBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFirstBankBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFirstBankBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
