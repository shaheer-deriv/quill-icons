import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNganluongBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNganluongBrandIcon',
  component: PaymentMethodNganluongBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNganluongBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNganluongBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
