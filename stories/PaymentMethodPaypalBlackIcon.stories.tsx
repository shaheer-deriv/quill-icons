import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaypalBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaypalBlackIcon',
  component: PaymentMethodPaypalBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaypalBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaypalBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
