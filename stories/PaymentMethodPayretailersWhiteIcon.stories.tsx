import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPayretailersWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPayretailersWhiteIcon',
  component: PaymentMethodPayretailersWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPayretailersWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPayretailersWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
