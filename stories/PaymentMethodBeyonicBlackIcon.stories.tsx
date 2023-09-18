import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBeyonicBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBeyonicBlackIcon',
  component: PaymentMethodBeyonicBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBeyonicBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBeyonicBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
