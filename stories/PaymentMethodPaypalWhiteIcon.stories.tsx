import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaypalWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaypalWhiteIcon',
  component: PaymentMethodPaypalWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaypalWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaypalWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
