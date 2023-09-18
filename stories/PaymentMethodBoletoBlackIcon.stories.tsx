import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBoletoBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBoletoBlackIcon',
  component: PaymentMethodBoletoBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBoletoBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBoletoBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
