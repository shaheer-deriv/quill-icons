import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaytrust88BrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaytrust88BrandIcon',
  component: PaymentMethodPaytrust88BrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaytrust88BrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaytrust88BrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
