import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBnbBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBnbBlackIcon',
  component: PaymentMethodBnbBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBnbBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBnbBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
