import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaytrust88WhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaytrust88WhiteIcon',
  component: PaymentMethodPaytrust88WhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaytrust88WhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaytrust88WhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
