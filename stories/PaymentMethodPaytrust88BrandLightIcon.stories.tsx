import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaytrust88BrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaytrust88BrandLightIcon',
  component: PaymentMethodPaytrust88BrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaytrust88BrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaytrust88BrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
