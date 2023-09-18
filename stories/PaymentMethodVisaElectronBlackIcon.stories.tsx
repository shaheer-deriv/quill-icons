import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVisaElectronBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVisaElectronBlackIcon',
  component: PaymentMethodVisaElectronBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVisaElectronBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVisaElectronBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
