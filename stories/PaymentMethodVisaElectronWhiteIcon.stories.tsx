import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVisaElectronWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVisaElectronWhiteIcon',
  component: PaymentMethodVisaElectronWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVisaElectronWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVisaElectronWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
