import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPermataBankBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPermataBankBrandDarkIcon',
  component: PaymentMethodPermataBankBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPermataBankBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPermataBankBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
