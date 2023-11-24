import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBanxaBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBanxaBrandIcon',
  component: PaymentMethodBanxaBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBanxaBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBanxaBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
