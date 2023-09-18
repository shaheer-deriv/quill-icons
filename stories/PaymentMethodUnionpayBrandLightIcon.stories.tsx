import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodUnionpayBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodUnionpayBrandLightIcon',
  component: PaymentMethodUnionpayBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodUnionpayBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodUnionpayBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
