import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOnlinenairaBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodOnlinenairaBrandIcon',
  component: PaymentMethodOnlinenairaBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOnlinenairaBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOnlinenairaBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
