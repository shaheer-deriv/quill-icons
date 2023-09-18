import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDerivDemoBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDerivDemoBrandLightIcon',
  component: PaymentMethodDerivDemoBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDerivDemoBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDerivDemoBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
