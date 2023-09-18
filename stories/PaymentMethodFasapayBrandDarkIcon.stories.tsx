import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFasapayBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFasapayBrandDarkIcon',
  component: PaymentMethodFasapayBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFasapayBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFasapayBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
