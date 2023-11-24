import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPayretailersBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPayretailersBrandIcon',
  component: PaymentMethodPayretailersBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPayretailersBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPayretailersBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
