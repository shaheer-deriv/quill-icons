import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVisaBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVisaBlackIcon',
  component: PaymentMethodVisaBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVisaBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVisaBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
