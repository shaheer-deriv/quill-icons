import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPermataBankWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPermataBankWhiteIcon',
  component: PaymentMethodPermataBankWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPermataBankWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPermataBankWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
