import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWyreWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWyreWhiteIcon',
  component: PaymentMethodWyreWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWyreWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWyreWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
