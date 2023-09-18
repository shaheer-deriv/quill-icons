import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaypalBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaypalBrandDarkIcon',
  component: PaymentMethodPaypalBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaypalBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaypalBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
