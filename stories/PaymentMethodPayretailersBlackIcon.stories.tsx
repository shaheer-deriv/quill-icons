import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPayretailersBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPayretailersBlackIcon',
  component: PaymentMethodPayretailersBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPayretailersBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPayretailersBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
