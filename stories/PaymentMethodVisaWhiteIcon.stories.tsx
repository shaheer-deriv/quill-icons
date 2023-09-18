import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVisaWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVisaWhiteIcon',
  component: PaymentMethodVisaWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVisaWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVisaWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
