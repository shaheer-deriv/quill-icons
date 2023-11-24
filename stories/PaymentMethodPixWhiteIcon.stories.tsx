import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPixWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPixWhiteIcon',
  component: PaymentMethodPixWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPixWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPixWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
