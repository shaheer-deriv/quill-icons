import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVisaElectronBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVisaElectronBrandIcon',
  component: PaymentMethodVisaElectronBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVisaElectronBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVisaElectronBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
