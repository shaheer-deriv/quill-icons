import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFasapayBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFasapayBrandLightIcon',
  component: PaymentMethodFasapayBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFasapayBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFasapayBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
