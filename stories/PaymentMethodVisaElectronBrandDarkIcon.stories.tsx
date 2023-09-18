import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVisaElectronBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVisaElectronBrandDarkIcon',
  component: PaymentMethodVisaElectronBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVisaElectronBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVisaElectronBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
