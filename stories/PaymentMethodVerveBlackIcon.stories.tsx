import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVerveBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVerveBlackIcon',
  component: PaymentMethodVerveBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVerveBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVerveBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
