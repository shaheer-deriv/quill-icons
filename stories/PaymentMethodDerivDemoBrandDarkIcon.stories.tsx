import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDerivDemoBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDerivDemoBrandDarkIcon',
  component: PaymentMethodDerivDemoBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDerivDemoBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDerivDemoBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
