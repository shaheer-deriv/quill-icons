import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodChequeBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodChequeBrandDarkIcon',
  component: PaymentMethodChequeBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodChequeBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodChequeBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
