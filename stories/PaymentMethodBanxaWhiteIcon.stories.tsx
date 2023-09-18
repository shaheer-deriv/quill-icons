import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBanxaWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBanxaWhiteIcon',
  component: PaymentMethodBanxaWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBanxaWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBanxaWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
