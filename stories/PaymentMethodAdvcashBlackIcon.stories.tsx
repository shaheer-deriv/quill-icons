import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAdvcashBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAdvcashBlackIcon',
  component: PaymentMethodAdvcashBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAdvcashBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAdvcashBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
