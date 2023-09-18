import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEpsWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEpsWhiteIcon',
  component: PaymentMethodEpsWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEpsWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEpsWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
