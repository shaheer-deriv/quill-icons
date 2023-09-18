import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFirstBankBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFirstBankBrandLightIcon',
  component: PaymentMethodFirstBankBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFirstBankBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFirstBankBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
