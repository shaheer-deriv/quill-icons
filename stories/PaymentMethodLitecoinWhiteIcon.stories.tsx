import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLitecoinWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLitecoinWhiteIcon',
  component: PaymentMethodLitecoinWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLitecoinWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLitecoinWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
