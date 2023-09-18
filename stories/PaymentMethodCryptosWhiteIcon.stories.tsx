import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCryptosWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCryptosWhiteIcon',
  component: PaymentMethodCryptosWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCryptosWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCryptosWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
