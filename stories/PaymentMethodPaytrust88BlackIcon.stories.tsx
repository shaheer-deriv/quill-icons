import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaytrust88BlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaytrust88BlackIcon',
  component: PaymentMethodPaytrust88BlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaytrust88BlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaytrust88BlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
