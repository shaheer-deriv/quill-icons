import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVisaElectronBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVisaElectronBrandLightIcon',
  component: PaymentMethodVisaElectronBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVisaElectronBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVisaElectronBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
