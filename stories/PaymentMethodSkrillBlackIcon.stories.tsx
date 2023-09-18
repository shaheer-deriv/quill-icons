import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSkrillBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSkrillBlackIcon',
  component: PaymentMethodSkrillBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSkrillBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSkrillBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
