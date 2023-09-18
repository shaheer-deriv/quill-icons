import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDerivDemoWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDerivDemoWhiteIcon',
  component: PaymentMethodDerivDemoWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDerivDemoWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDerivDemoWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
