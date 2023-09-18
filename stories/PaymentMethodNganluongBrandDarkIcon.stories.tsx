import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNganluongBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNganluongBrandDarkIcon',
  component: PaymentMethodNganluongBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNganluongBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNganluongBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
