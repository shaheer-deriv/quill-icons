import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBoletoWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBoletoWhiteIcon',
  component: PaymentMethodBoletoWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBoletoWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBoletoWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
