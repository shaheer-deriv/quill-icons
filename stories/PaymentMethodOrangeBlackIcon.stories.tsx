import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOrangeBlackIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodOrangeBlackIcon',
  component: PaymentMethodOrangeBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOrangeBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOrangeBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
