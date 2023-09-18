import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDirecta24BlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDirecta24BlackIcon',
  component: PaymentMethodDirecta24BlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDirecta24BlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDirecta24BlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
