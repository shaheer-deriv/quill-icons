import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPermataBankBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPermataBankBlackIcon',
  component: PaymentMethodPermataBankBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPermataBankBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPermataBankBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
