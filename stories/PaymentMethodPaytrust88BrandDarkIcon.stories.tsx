import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaytrust88BrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaytrust88BrandDarkIcon',
  component: PaymentMethodPaytrust88BrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaytrust88BrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaytrust88BrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
