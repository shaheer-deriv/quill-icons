import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSkrillWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSkrillWhiteIcon',
  component: PaymentMethodSkrillWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSkrillWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSkrillWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
