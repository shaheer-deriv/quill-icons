import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodChequeBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodChequeBrandLightIcon',
  component: PaymentMethodChequeBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodChequeBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodChequeBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
