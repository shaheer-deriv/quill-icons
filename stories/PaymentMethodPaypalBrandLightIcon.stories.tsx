import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaypalBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaypalBrandLightIcon',
  component: PaymentMethodPaypalBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaypalBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaypalBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
