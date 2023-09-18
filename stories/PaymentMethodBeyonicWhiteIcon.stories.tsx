import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBeyonicWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBeyonicWhiteIcon',
  component: PaymentMethodBeyonicWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBeyonicWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBeyonicWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
