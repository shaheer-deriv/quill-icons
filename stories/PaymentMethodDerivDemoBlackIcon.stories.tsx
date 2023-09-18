import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDerivDemoBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDerivDemoBlackIcon',
  component: PaymentMethodDerivDemoBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDerivDemoBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDerivDemoBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
