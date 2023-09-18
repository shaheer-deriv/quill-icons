import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAstropayBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAstropayBrandLightIcon',
  component: PaymentMethodAstropayBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAstropayBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAstropayBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
