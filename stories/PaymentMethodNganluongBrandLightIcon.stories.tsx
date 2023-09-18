import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNganluongBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNganluongBrandLightIcon',
  component: PaymentMethodNganluongBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNganluongBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNganluongBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
