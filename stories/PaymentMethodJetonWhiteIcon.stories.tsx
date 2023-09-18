import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJetonWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJetonWhiteIcon',
  component: PaymentMethodJetonWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJetonWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJetonWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
