import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSkrill1TapBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSkrill1TapBlackIcon',
  component: PaymentMethodSkrill1TapBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSkrill1TapBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSkrill1TapBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
