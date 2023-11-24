import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDerivDemoBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDerivDemoBrandIcon',
  component: PaymentMethodDerivDemoBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDerivDemoBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDerivDemoBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
