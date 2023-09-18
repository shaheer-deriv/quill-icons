import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBanxaBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBanxaBlackIcon',
  component: PaymentMethodBanxaBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBanxaBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBanxaBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
