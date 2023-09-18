import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLitecoinBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLitecoinBlackIcon',
  component: PaymentMethodLitecoinBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLitecoinBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLitecoinBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
