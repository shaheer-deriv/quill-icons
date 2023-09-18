import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWyreBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWyreBlackIcon',
  component: PaymentMethodWyreBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWyreBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWyreBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
