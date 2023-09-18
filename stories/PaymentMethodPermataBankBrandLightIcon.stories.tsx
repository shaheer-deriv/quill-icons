import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPermataBankBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPermataBankBrandLightIcon',
  component: PaymentMethodPermataBankBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPermataBankBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPermataBankBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
