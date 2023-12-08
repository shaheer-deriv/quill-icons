import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCardanoWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCardanoWhiteIcon',
  component: PaymentMethodCardanoWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCardanoWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCardanoWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
