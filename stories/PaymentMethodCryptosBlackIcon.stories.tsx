import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCryptosBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCryptosBlackIcon',
  component: PaymentMethodCryptosBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCryptosBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCryptosBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
